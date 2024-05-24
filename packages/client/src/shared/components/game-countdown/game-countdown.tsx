import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

type GameCountdownProps = {
  isPause: boolean
  initialSeconds: number
  onComplete: () => void
  onSeconds: (seconds: number) => void
}

export const GameCountdown: React.FC<GameCountdownProps> = ({
  isPause,
  initialSeconds,
  onComplete,
  onSeconds,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    if (seconds > 0) {
      if (isPause) {
        return
      }

      const timerId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1)
      }, 1000)

      onSeconds(seconds)

      return () => clearInterval(timerId)
    } else {
      onComplete()
    }
  }, [isPause, seconds, onComplete])

  return (
    <div className={styles['game-countdown']}>
      {seconds > 0 ? <p>Осталось секунд: {seconds}</p> : <p>Время вышло!</p>}
    </div>
  )
}
