import { Button } from '@mui/material'
import svgUrl from '@/assets/btn-menu.png'

import styles from './styles.module.css'

export const MenuButton = () => (
  <Button href="/" className={styles.root}>
    <img src={svgUrl} alt="btn-menu" />
  </Button>
)
