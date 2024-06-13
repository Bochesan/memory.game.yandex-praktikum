import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameCanvas, GameCountdown, GameScore } from '@/shared/components'
import { useLevel, useToggle, useProgress } from '@/shared/hooks'
import styles from './styles.module.css'

// Вычисляем размер UI эдементов относительно высоты экрана
const scalePercent = window.innerHeight < 1040 ? window.innerHeight / 1040 : 1
const scaleMarginPercent = ((1 - scalePercent) * 100) / 2
const scaleStyle = {
  transform: `scale(${scalePercent})`,
  marginTop: `-${scaleMarginPercent}%`,
}

export const GamePage = () => {
  const navigate = useNavigate()
  const [isPause, togglePause] = useToggle(true)
  const { scoreUp, completeLevel, levelUp, selectedLevel, selectLevel } =
    useProgress()
  const [level, setLevel] = useLevel(selectedLevel)
  const [restartKey, setRestartKey] = useState(0)
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(level.gameTimer)

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
    const scoreTotal = score + seconds
    const nextLevel = level.id + 1

    handlePause()

    completeLevel(nextLevel)
    setLevel(nextLevel)
    selectLevel(nextLevel)
    scoreUp(scoreTotal)

    const isFinal = level.id >= 11
    if (!isFinal) levelUp(nextLevel)

    const isContinue = confirm(
      `Вы выиграли! Получено очков: ${scoreTotal} Продолжить?`
    )
    if (isContinue && !isFinal) {
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
            initialSeconds={level.gameTimer}
            onComplete={handleGameOver}
            onSeconds={handleSeconds}
          />
        </div>
        <div className={styles['game-page__info']}>
          <GameScore score={score} level={level} />
        </div>
      </div>
      <GameCanvas
        isPause={isPause}
        restartKey={restartKey}
        level={level}
        onScore={handleScore}
        onPlay={handlePause}
        onVictory={handleGameWin}
      />
    </main>
  )
}
