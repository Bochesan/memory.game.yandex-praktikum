import React, { useEffect, useState, useRef } from 'react'
import { GameModel } from '@/shared/services/game/GameModel'
import { GameView } from '@/shared/services/game/GameView'
import { GameController } from '@/shared/services/game/GameController'
import { GameLevelType } from '@/shared/services/game/types'
import styles from './styles.module.css'

type GameCanvasProps = {
  isPause: boolean
  restartKey: number
  level: GameLevelType
  onScore: (score: number) => void
  onPlay: () => void
  onVictory: () => void
}

export const GameCanvas: React.FC<GameCanvasProps> = ({
  isPause,
  restartKey,
  level,
  onScore,
  onPlay,
  onVictory,
}) => {
  const [isWin, setIsWin] = useState(false)
  const [score, setScore] = useState(0)
  const [isImagesLoaded, setImagesLoaded] = useState(false)
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
        level.cardValues,
        () => {
          gameControllerRef.current?.updateView()
          setScore(gameControllerRef.current?.getScore() || 0)
        },
        handleWin
      )

      const view = new GameView(canvasRef.current)
      view.loadImages(level.cardValues, () => {
        setImagesLoaded(true)
        gameControllerRef.current?.updateView()
      })

      const controller = new GameController(model, view)
      gameControllerRef.current = controller
    }
  }, [level])

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
        width={level.canvasWidth}
        height={level.canvasHeight}
        onClick={handleCanvasClick}
        style={{ display: isImagesLoaded ? 'block' : 'none' }}
      />
      {!isImagesLoaded && (
        <div className={styles['game-canvas__loading']}>
          <span>Loading...</span>
        </div>
      )}
    </div>
  )
}
