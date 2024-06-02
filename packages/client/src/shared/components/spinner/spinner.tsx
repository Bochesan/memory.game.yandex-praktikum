import React from 'react'
import styles from './styles.module.css'

type SpinnerProps = {
  color?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ color = '#01CBFD' }) => {
  return (
    <div className={styles['spinner']}>
      <div
        className={styles['spinner__bounce-1']}
        style={{ backgroundColor: color }}></div>
      <div
        className={styles['spinner__bounce-2']}
        style={{ backgroundColor: color }}></div>
    </div>
  )
}
