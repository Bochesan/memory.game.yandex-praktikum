import { Layout, LeaderBoard, Navigate } from '@/shared/components'
import styles from './styles.module.css'

const routes = [
  {
    path: '/',
    name: 'Назад',
    sort: 20,
  },
  {
    path: '/leader-board',
    name: 'Лидерборд',
    sort: 10,
  },
]

export const LeaderBoardPage = () => {
  return (
    <main className={styles['leader-board-page']}>
      <Layout title="Таблица лидеров">
        <div className={styles.container}>
          <div className={styles.navigation}>
            <Navigate routes={routes} />
          </div>
          <LeaderBoard />
        </div>
      </Layout>
    </main>
  )
}
