import { Navigation, UserInfo, Experience, useGetUserQuery } from '@/shared'
import { useProgress } from '@/shared/hooks'
import bgUrl from '@/assets/bg.png'
import styles from './styles.module.css'

const ControlPanel = () => {
  return (
    <>
      <UserInfo />
    </>
  )
}
const AuthControlPanel = () => {
  const { userScore } = useProgress()
  const userScorePercent = (userScore / 550) * 100

  return (
    <>
      <Experience value={userScorePercent} />
      <UserInfo />
    </>
  )
}

export const MainPage = () => {
  const { currentData } = useGetUserQuery()

  return (
    <div className={styles.root}>
      <img src={bgUrl} className={styles.bg} alt="Background main page" />
      <div className={styles.menu}>
        <Navigation />
      </div>
      <div className={styles.info}>
        {currentData === undefined ? <ControlPanel /> : <AuthControlPanel />}
      </div>
    </div>
  )
}
