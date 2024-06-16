import { Layout } from '@/shared/components'
import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'

export const ForumPage = () => {
  return (
    <main>
      <Layout title="Форум">
        <div className={styles.root}>
          <Outlet />
        </div>
      </Layout>
    </main>
  )
}
