import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameCanvas, GameCountdown, GameScore } from '@/shared/components'
import { useToggle } from '@/shared/hooks'
import styles from './styles.module.css'

// Параметры
const CARD_COUNT = 10
const GAME_TIMER = 30

export const GamePage = () => {
  const [isPause, togglePause] = useToggle(true)
  const [restartKey, setRestartKey] = useState(0)
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(GAME_TIMER)
  const navigate = useNavigate()

  const onRestart = (): void => {
    setRestartKey(prevKey => prevKey + 1)
    setScore(0)
    togglePause(true)
  }

  const handleMenu = (): void => {
    const isExit = confirm('Выйти из игры?')
    if (isExit) {
      navigate('/levels')
    }
  }

  const handlePause = (): void => {
    togglePause()
  }

  const handleGameWin = (): void => {
    handlePause()
    const scoreTotal = score + seconds
    const isContinue = confirm(
      `Вы выиграли! Получено очков: ${scoreTotal} Продолжить?`
    )
    if (isContinue) {
      onRestart()
    } else {
      navigate('/levels')
    }
  }

  const handleGameOver = (): void => {
    const isRepeat = confirm('Вы проиграли! Заново?')
    if (isRepeat) {
      onRestart()
    } else {
      navigate('/levels')
    }
  }

  const handleScore = (addScore: number): void => {
    setScore(score + addScore)
  }

  const handleSeconds = (reSeconds: number): void => {
    setSeconds(reSeconds)
  }

  return (
    <main className={styles['game-page']}>
      <div className={styles['game-page__control']}>
        <button onClick={handleMenu}>Меню</button>
        <button onClick={handlePause}>{isPause ? 'Play' : 'Pause'}</button>
        <button onClick={onRestart}>Restart</button>
      </div>
      <div className={styles['game-page__info']}>
        <GameCountdown
          isPause={isPause}
          restartKey={restartKey}
          initialSeconds={GAME_TIMER}
          onComplete={handleGameOver}
          onSeconds={handleSeconds}
        />
        <GameScore score={score} />
      </div>
      <GameCanvas
        isPause={isPause}
        restartKey={restartKey}
        cardCount={CARD_COUNT}
        onScore={handleScore}
        onPlay={handlePause}
        onVictory={handleGameWin}
      />
    </main>
  )
}
