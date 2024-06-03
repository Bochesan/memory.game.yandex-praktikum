import React from 'react'
import styles from './styles.module.css'
import { ReactSVG } from 'react-svg'

import { ICONS } from '@/shared/constants/icons'

export const Score = () => {
  return (
    <div className={styles.root}>
      <ReactSVG src={ICONS.Gil} className={styles.icon} />
      <div className={styles.score}>248</div>
    </div>
  )
}
