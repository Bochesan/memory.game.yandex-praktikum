import { Navigation, UserInfo, Experience, useGetUserQuery } from '@/shared'
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
  return (
    <>
      <Experience level={0} />
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
