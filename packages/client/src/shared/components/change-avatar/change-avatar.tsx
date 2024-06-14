import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useGetUserQuery, useUploadAvatarMutation } from '@/shared'
import { TUser } from '@/types'
import { RESOURCES } from '@/utils'

export const ChangeAvatar = () => {
  const { currentData } = useGetUserQuery()
  if (!currentData) return null

  const { avatar } = currentData as TUser
  const [uploadAvatar] = useUploadAvatarMutation()
  const [errorMessage, setErrorMessage] = useState<null | string>(null)
  const [avatarUrl, setAvatarUrl] = useState<null | string>(null)
  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null)

    const file: File | null = event.currentTarget.files
      ? event.currentTarget.files[0]
      : null
    if (file !== null) {
      if (file.size > 2097152 || !file.type || file.type !== 'image/jpeg') {
        return setErrorMessage('Invalid file format')
      }

      setErrorMessage(null)
      const formData = new FormData()
      formData.append('avatar', file)
      uploadAvatar(formData)
    }
  }

  useEffect(() => {
    setAvatarUrl(`${RESOURCES.Images}${avatar}`)
  }, [currentData])

  return (
    <div className={styles.root}>
      <form
        className={styles.form + ' ' + (errorMessage ? styles.rootError : '')}>
        <label className={styles.container}>
          <input className={styles.input} onChange={handleSubmit} type="file" />
          {avatarUrl && (
            <img src={avatarUrl} className={styles.avatar} alt="Avatar" />
          )}
        </label>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      </form>
    </div>
  )
}
