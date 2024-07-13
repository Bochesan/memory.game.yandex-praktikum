import { useMusic, useProgress } from '@/shared/hooks'
import bgUrl from '@/assets/bg.png'
import styles from './styles.module.css'
import { UserInfo } from '@/shared/components/user-info/user-info'
import { Experience } from '@/shared/components/experience/experience'
import { useGetUserQuery } from '@/shared/slices/api-slices'
import { Navigation } from '@/shared/components/navigation/navigation'

const ControlPanel = () => <UserInfo />

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

  const musicBtn = useMusic({ src: '/music/theme.mp3', loop: true, ui: true })

  return (
    <div className={styles.root}>
      <div className={styles.music}>{musicBtn}</div>
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
