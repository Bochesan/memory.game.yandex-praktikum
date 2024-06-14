import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GameCanvas,
  GameCountdown,
  GameScore,
  ModalResult,
  ModalExit,
} from '@/shared/components'
import { useLevel, useToggle, useProgress } from '@/shared/hooks'
import { TypeModal } from '@/shared/components/modal-comps/types'
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
  const [isOpenModalWin, setOpenModalWin] = useState(false)
  const [isOpenModalLose, setOpenModalLose] = useState(false)
  const [isOpenModalExit, setOpenModalExit] = useState(false)
  const [isPause, togglePause] = useToggle(true)
  const {
    completeLevel,
    selectedLevel,
    selectLevel,
    userLevel,
    levelUp,
    scoreUp,
  } = useProgress()
  const [level, setLevel] = useLevel(selectedLevel)
  const [restartKey, setRestartKey] = useState(0)
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(level.gameTimer)
  const [resultText, setResultText] = useState('')

  const onRestart = (): void => {
    setRestartKey(prevKey => prevKey + 1)
    setScore(0)
    togglePause(true)
  }

  const onContinue = (): void => {
    const scoreTotal = score + seconds
    const nextLevel = level.id + 1
    const isFinal = level.id >= 11

    completeLevel(nextLevel)
    setLevel(nextLevel)
    selectLevel(nextLevel)

    if (!isFinal) levelUp(nextLevel)
    if (userLevel === level.id) scoreUp(scoreTotal)

    if (!isFinal) {
      onRestart()
    } else {
      navigate('/levels')
    }

    setOpenModalWin(false)
  }

  const onGameOver = (): void => {
    onRestart()
    setOpenModalLose(false)
  }

  const onExit = (): void => {
    navigate('/levels')
  }

  const handleMenu = (): void => {
    togglePause(true)
    setOpenModalExit(true)
  }

  const handlePause = (): void => {
    togglePause()
  }

  const handleGameWin = (): void => {
    handlePause()
    setResultText(
      `Поздравляем! Вы прошли уровень «${level.title}» и получили опыт: ${
        score + seconds
      } exp`
    )
    setOpenModalWin(true)
  }

  const handleGameOver = (): void => {
    setResultText(
      `Не унывай! Попробуй еще раз пройти уровень. У тебя получится )`
    )
    setOpenModalLose(true)
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
      <ModalResult
        onContinue={onContinue}
        lvlName={resultText}
        isOpened={isOpenModalWin}
        type={TypeModal.Win}
      />
      <ModalResult
        onContinue={onGameOver}
        lvlName={resultText}
        isOpened={isOpenModalLose}
        type={TypeModal.Lose}
      />
      <ModalExit
        onContinue={onExit}
        onExit={() => setOpenModalExit(false)}
        lvlName=""
        lvlNumber={level.id}
        isOpened={isOpenModalExit}
      />
    </main>
  )
}
