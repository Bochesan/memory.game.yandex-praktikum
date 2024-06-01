import { Navigation, UserInfo, Experience } from '@/shared'
import bgUrl from '@/assets/bg.png'

import styles from './styles.module.css'

export const MainPage = () => {
  return (
    <div className={styles.root}>
      <img src={bgUrl} className={styles.bg} />
      <div className={styles.menu}>
        <Navigation />
      </div>
      <div className={styles.info}>
        <Experience level={0} />
        <UserInfo />
      </div>
    </div>
  )
}
