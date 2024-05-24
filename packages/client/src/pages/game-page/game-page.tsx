import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameCanvas } from '../../shared/components/game-canvas'
import { GameCountdown } from '../../shared/components/game-countdown'
import { GameScore } from '../../shared/components/game-score'
import styles from './styles.module.css'

// Параметры
const CARD_COUNT = 10
const GAME_TIMER = 30

export const GamePage = () => {
  const [isPause, setPause] = useState(true)
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(30)
  const navigate = useNavigate()

  const handleMenu = (): void => {
    const isExit = confirm('Выйти из игры?')
    if (isExit) {
      navigate('/levels')
    }
  }

  const handlePause = (): void => {
    setPause(!isPause)
  }

  const handleGameWin = (): void => {
    handlePause()
    const scoreTotal = score + seconds
    const isContinue = confirm(
      `Вы выиграли! Получено очков: ${scoreTotal} Продолжить?`
    )
    if (isContinue) {
      location.reload()
    } else {
      navigate('/levels')
    }
  }

  const handleGameOver = (): void => {
    const isRepeat = confirm('Вы проиграли! Заново?')
    if (isRepeat) {
      location.reload()
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
      </div>
      <div className={styles['game-page__info']}>
        <GameCountdown
          isPause={isPause}
          initialSeconds={GAME_TIMER}
          onComplete={handleGameOver}
          onSeconds={handleSeconds}
        />
        <GameScore score={score} />
      </div>
      <GameCanvas
        isPause={isPause}
        cardCount={CARD_COUNT}
        onScore={handleScore}
        onPlay={handlePause}
        onVictory={handleGameWin}
      />
    </main>
  )
}
