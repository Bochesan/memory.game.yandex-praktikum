import { Navigation, UserInfo, Experience } from '@/shared'
import { useAuth, useProgress } from '@/shared/hooks'
import bgUrl from '@/assets/bg.png'
import styles from './styles.module.css'

export const MainPage = () => {
  const { isAuth } = useAuth()
  const { userScore } = useProgress()
  const userScorePercent = (userScore / 550) * 100

  return (
    <div className={styles.root}>
      <img src={bgUrl} className={styles.bg} alt="Background main page" />
      <div className={styles.menu}>
        <Navigation />
      </div>
      <div className={styles.info}>
        {isAuth && <Experience value={userScorePercent} />}
        <UserInfo />
      </div>
    </div>
  )
}
