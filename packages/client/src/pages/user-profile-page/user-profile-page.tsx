import styles from './styles.module.css'
import { Layout } from '@/shared/components/layout'
import {
  ChangeAvatar,
  EditPasswordForm,
  EditProfileForm,
  Experience,
  Navigate,
} from '@/shared'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/shared/hooks'

type State = {
  experience: null | boolean
  template: null | React.ReactNode
}

export const UserProfilePage = () => {
  const navigate = useNavigate()
  const [component, setComponent] = useState<null | State>(null)
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
      sort: 30,
    },
    {
      path: '/edit-password',
      name: 'Смена пароля',
      sort: 20,
    },
    {
      path: '/profile',
      name: 'Редактирование',
      sort: 10,
    },
  ]

  useEffect(() => {
    switch (location.pathname) {
      case '/profile':
        return setComponent({
          experience: true,
          template: <EditProfileForm />,
        })
      case '/edit-password':
        return setComponent({
          experience: false,
          template: <EditPasswordForm />,
        })
    }
  }, [location.pathname])

  return (
    <Layout title={'Редактирование'}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <Navigate routes={routes} />
        </div>
        <div className={styles.form}>
          {component?.template}
          {component?.experience && (
            <div className={styles.rombs}>
              <div className={styles.experience}>
                <Experience level={0} />
              </div>
              <div className={styles.avatar}>
                <ChangeAvatar />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
