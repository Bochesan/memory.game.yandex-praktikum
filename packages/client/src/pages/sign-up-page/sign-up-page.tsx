import styles from './styles.module.css'
import { Layout } from '@/shared/components/layout'
import { SignNav } from '@/shared'

export const SignUpPage = () => (
  <Layout title={'Авторизация'}>
    <div className={styles.container}>
      <SignNav />
      <div className={styles.content}>Sign-up page</div>
    </div>
  </Layout>
)
