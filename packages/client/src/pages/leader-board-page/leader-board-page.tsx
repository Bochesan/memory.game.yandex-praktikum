import { Layout } from '@/shared/components'
import { LeaderBoard } from '@/shared/components'
import styles from './styles.module.css'

export const LeaderBoardPage = () => {
  return (
    <main className={styles['leader-board-page']}>
      <Layout title="Таблица лидеров">
        <LeaderBoard />
      </Layout>
    </main>
  )
}
