import styles from './styles.module.css'
import { Layout } from '@/shared/components/layout'
import { Navigate, SignInForm, SignUpForm } from '@/shared'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

type State = {
  type: string
  title: string
}

export const AuthPage = () => {
  const [component, setComponent] = useState<null | State>(null)
  const location = useLocation()

  const routes = [
    {
      path: '/',
      name: 'Назад',
      sort: 30,
    },
    {
      path: '/sign-in',
      name: 'Вход',
      sort: 20,
    },
    {
      path: '/sign-up',
      name: 'Регистрация',
      sort: 10,
    },
  ]

  useEffect(() => {
    if (location.pathname === '/sign-in') {
      return setComponent({ type: 'SignIn', title: 'Авторизация' })
    }
    setComponent({ type: 'SignUp', title: 'Регистрация' })
  }, [location.pathname])

  return (
    <Layout title={component?.title}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <Navigate routes={routes} />
        </div>
        <div className={styles.form}>
          {component?.type === 'SignIn' ? <SignInForm /> : <SignUpForm />}
        </div>
      </div>
    </Layout>
  )
}
