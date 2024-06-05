import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameCanvas, GameCountdown, GameScore } from '@/shared/components'
import { useToggle } from '@/shared/hooks'
import { GAME_TIMER } from '@/shared/services/game/constants'
import styles from './styles.module.css'

const scalePercent = window.innerHeight < 1040 ? window.innerHeight / 1040 : 1
const scaleMarginPercent = ((1 - scalePercent) * 100) / 2
const scaleStyle = {
  transform: `scale(${scalePercent})`,
  marginTop: `-${scaleMarginPercent}%`,
}

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

  const handleScore = (newScore: number): void => {
    setScore(newScore)
  }

  const handleSeconds = (reSeconds: number): void => {
    setSeconds(reSeconds)
  }

  return (
    <main className={styles['game-page']}>
      <div className={styles['game-page__bar']} style={scaleStyle}>
        <div className={styles['game-page__control']}>
          <button
            onClick={handleMenu}
            className={styles['game-page__menu']}></button>
          <button onClick={handlePause} className={styles['game-page__pause']}>
            {isPause ? '▷' : '||'}
          </button>
          <button onClick={onRestart} className={styles['game-page__restart']}>
            Заного
          </button>
          <GameCountdown
            isPause={isPause}
            restartKey={restartKey}
            initialSeconds={GAME_TIMER}
            onComplete={handleGameOver}
            onSeconds={handleSeconds}
          />
        </div>
        <div className={styles['game-page__info']}>
          <GameScore score={score} />
        </div>
      </div>
      <GameCanvas
        isPause={isPause}
        restartKey={restartKey}
        onScore={handleScore}
        onPlay={handlePause}
        onVictory={handleGameWin}
      />
    </main>
  )
}
