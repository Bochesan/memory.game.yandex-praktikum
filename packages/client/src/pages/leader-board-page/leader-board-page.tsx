import { LeaderBoard } from '@/shared/components'
import styles from './styles.module.css'

export const LeaderBoardPage = () => {
  return (
    <main className={styles['leader-board-page']}>
      <LeaderBoard />
    </main>
  )
}
