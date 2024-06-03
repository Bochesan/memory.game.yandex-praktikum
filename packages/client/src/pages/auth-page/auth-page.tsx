import styles from './styles.module.css'
import { Layout } from '@/shared/components/layout'
import { Navigate, SignInForm, SignUpForm } from '@/shared'
import { useEffect, useState } from 'react'

type State = {
  type: string
  title: string
  template: null | React.ReactNode
}

export const AuthPage = () => {
  const [component, setComponent] = useState<null | State>(null)

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
    switch (location.pathname) {
      case '/sign-in':
        return setComponent({
          type: 'SignIn',
          title: 'Авторизация',
          template: <SignInForm />,
        })
      case '/sign-up':
        return setComponent({
          type: 'SignUp',
          title: 'Регистрация',
          template: <SignUpForm />,
        })
    }
  }, [location.pathname])

  return (
    <Layout title={component?.title}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <Navigate routes={routes} />
        </div>
        <div className={styles.form}>{component?.template}</div>
      </div>
    </Layout>
  )
}
