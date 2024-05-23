import { Button } from '@mui/material'
import svgUrl from '@/assets/btn-menu.png'

import styles from './styles.module.css'

export const ErrorPage = () => (
  <div className={styles.bg}>
    <Button href="/">
      <img src={svgUrl} alt="btn-menu" />
    </Button>
  </div>
)
