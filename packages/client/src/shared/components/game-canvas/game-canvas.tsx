import React, { useEffect, useState, useRef } from 'react'
import { GameModel } from '@/shared/services/game/GameModel'
import { GameView } from '@/shared/services/game/GameView'
import { GameController } from '@/shared/services/game/GameController'
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CARD_VALUES,
} from '@/shared/services/game/constants'
import styles from './styles.module.css'

type GameCanvasProps = {
  isPause: boolean
  restartKey: number
  onScore: (score: number) => void
  onPlay: () => void
  onVictory: () => void
}

export const GameCanvas: React.FC<GameCanvasProps> = ({
  isPause,
  restartKey,
  onScore,
  onPlay,
  onVictory,
}) => {
  const [isWin, setIsWin] = useState(false)
  const [score, setScore] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameControllerRef = useRef<GameController | null>(null)

  useEffect(() => {
    handleRestart()
  }, [restartKey])

  useEffect(() => {
    if (isWin) {
      onVictory()
    }
  }, [isWin])

  useEffect(() => {
    onScore(score)
  }, [score])

  useEffect(() => {
    if (canvasRef.current) {
      const model = new GameModel(
        CARD_VALUES,
        () => {
          gameControllerRef.current?.updateView()
          setScore(gameControllerRef.current?.getScore() || 0)
        },
        handleWin
      )
      const view = new GameView(canvasRef.current)
      const controller = new GameController(model, view)
      gameControllerRef.current = controller
      controller.updateView()
    }
  }, [])

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isPause) {
      onPlay()
    }
    if (gameControllerRef.current && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      gameControllerRef.current.handleCardClick(x, y)
    }
  }

  const handleRestart = () => {
    setIsWin(false)
    setScore(0)
    gameControllerRef.current?.handleRestart()
  }

  const handleWin = () => {
    setIsWin(true)
  }

  return (
    <div className={styles['game-canvas']}>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        onClick={handleCanvasClick}
      />
    </div>
  )
}
