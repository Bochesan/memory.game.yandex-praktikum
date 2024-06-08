import { Navigation, UserInfo, Experience } from '@/shared'
import bgUrl from '@/assets/bg.png'

import styles from './styles.module.css'
import { useAuth } from '@/shared/hooks'

export const MainPage = () => {
  const { isAuth } = useAuth()
  return (
    <div className={styles.root}>
      <img src={bgUrl} className={styles.bg} alt="Background main page" />
      <div className={styles.menu}>
        <Navigation />
      </div>
      <div className={styles.info}>
        {isAuth && <Experience level={0} />}
        <UserInfo />
      </div>
    </div>
  )
}
