import React, { useState, useEffect } from 'react'
import { useToggle } from '@/shared/hooks'
import styles from './styles.module.css'

type GameCountdownProps = {
  isPause: boolean
  restartKey: number
  initialSeconds: number
  onComplete: () => void
  onSeconds: (seconds: number) => void
}

export const GameCountdown: React.FC<GameCountdownProps> = ({
  isPause,
  restartKey,
  initialSeconds,
  onComplete,
  onSeconds,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isComplete, toggleComplete] = useToggle(false)

  useEffect(() => {
    setSeconds(initialSeconds)
  }, [restartKey])

  useEffect(() => {
    if (isComplete) {
      onComplete()
    }
  }, [isComplete])

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
    }

    toggleComplete()
  }, [isPause, seconds])

  return (
    <div className={styles['game-countdown']}>
      {seconds > 0 ? <p>Осталось секунд: {seconds}</p> : <p>Время вышло!</p>}
    </div>
  )
}
