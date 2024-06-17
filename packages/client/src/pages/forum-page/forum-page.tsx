import { Layout, Navigate } from '@/shared/components'
import ForumMainPage from '@/pages/forum-main-page'
import styles from './styles.module.css'

const routes = [
  {
    path: '/',
    name: 'Назад',
    sort: 30,
  },
  {
    path: '/forum-create',
    name: 'Создать тему',
    sort: 20,
  },
  {
    path: '/forum',
    name: 'Все темы',
    sort: 10,
  },
]

export const ForumPage = () => {
  return (
    <main>
      <Layout title="Форум">
        <div className={styles.container}>
          <div className={styles.navigation}>
            <Navigate routes={routes} />
          </div>
          <div className={styles.root}>
            <ForumMainPage />
          </div>
        </div>
      </Layout>
    </main>
  )
}
