import { MenuButton } from '@/shared'
import bgUrl from '@/assets/500.png'

import styles from './styles.module.css'

export const ErrorPage = () => (
  <div className={styles.bg} style={{ backgroundImage: `url(${bgUrl})` }}>
    <MenuButton />
  </div>
)
