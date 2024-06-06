import React, { useState } from 'react'
import styles from './styles.module.css'
import { useAuth } from '@/shared/hooks'
import { useUploadAvatarMutation } from '@/shared'

export const ChangeAvatar = () => {
  const { avatar } = useAuth()
  const [uploadAvatar] = useUploadAvatarMutation()
  const [errorMessage, setErrorMessage] = useState<null | string>(null)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event)
    console.log(event.target)

    const file = event.target.files[0]
    const fileName = file.name
    console.log('fileName ', fileName)
    if (file.size > 2097152 || !file.type || file.type !== 'image/jpeg') {
      return setErrorMessage('Invalid file format')
    }

    setErrorMessage(null)
    const formData = new FormData()
    formData.append('avatar', file)
    uploadAvatar(formData)
  }

  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <label className={styles.container}>
          <input className={styles.input} onChange={handleSubmit} type="file" />
          {avatar && (
            <img src={avatar} className={styles.avatar} alt="Avatar" />
          )}
        </label>
      </form>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  )
}
