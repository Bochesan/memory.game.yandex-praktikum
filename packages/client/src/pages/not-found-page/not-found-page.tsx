import { MenuButton } from '@/shared'
import bgUrl from '@/assets/404.png'

import styles from './styles.module.css'

export const NotFoundPage = () => (
  <div className={styles.bg} style={{ backgroundImage: `url(${bgUrl})` }}>
    <MenuButton />
  </div>
)
