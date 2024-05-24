import { Button as Default, Typography, ButtonProps } from '@mui/material'
import svgUrl from '@/assets/menu.png'

import styles from './styles.module.css'

export const Button = ({ children, ...props }: ButtonProps) => (
  <Default className={styles.root} {...props}>
    <img src={svgUrl} alt="btn-menu" />
    <Typography
      className={styles.text}
      variant="h4"
      fontWeight={300}
      color="white">
      {children}
    </Typography>
  </Default>
)
