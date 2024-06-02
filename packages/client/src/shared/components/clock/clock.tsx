import React from 'react'
import styles from './styles.module.css'
import { ReactSVG } from 'react-svg'

import IconScore from '@/assets/images/icons/gil.svg'

export const Score = () => {
  return (
    <div className={styles.root}>
      <ReactSVG src={IconScore} className={styles.icon} />
      <div className={styles.score}>248</div>
    </div>
  )
}
