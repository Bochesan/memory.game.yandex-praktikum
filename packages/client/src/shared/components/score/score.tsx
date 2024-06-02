import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import svgUrl from '@/assets/maps.svg'
import { Navigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import IconClock from '@/assets/images/icons/clock.svg'

export const Clock = () => {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const formatTime = (date: Date, type: string): string => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    switch (type) {
      case 'hours':
        return hours
      case 'minutes':
        return minutes
      default:
        return `${hours}`
    }
  }

  return (
    <div className={styles.root}>
      <ReactSVG src={IconClock} className={styles.icon} />
      <div className={styles.clock}>
        <span>{formatTime(time, 'hours')}</span>
        <span className={styles.separator}>:</span>
        <span>{formatTime(time, 'minutes')}</span>
      </div>
    </div>
  )
}
