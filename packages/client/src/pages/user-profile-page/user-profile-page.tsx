import styles from './styles.module.css'
import { Layout } from '@/shared/components/layout'
import {
  ChangeAvatar,
  EditProfileForm,
  Experience,
  Navigate,
  SignInForm,
  SignUpForm,
} from '@/shared'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/shared/hooks'

export const UserProfilePage = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth()

  useEffect(() => {
    if (!isAuth) {
      return navigate('/')
    }
  }, [isAuth])

  const routes = [
    {
      path: '/',
      name: 'Назад',
      sort: 20,
    },
    {
      path: '/profile',
      name: 'Редактирование',
      sort: 10,
    },
  ]

  return (
    <Layout title={'Редактирование'}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <Navigate routes={routes} />
        </div>
        <div className={styles.form}>
          <EditProfileForm />
          <div className={styles.rombs}>
            <div className={styles.experience}>
              <Experience level={0} />
            </div>
            <div className={styles.avatar}>
              <ChangeAvatar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
