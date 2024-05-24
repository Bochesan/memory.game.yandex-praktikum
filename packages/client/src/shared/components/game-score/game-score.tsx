import React from 'react'
import styles from './styles.module.css'

type GameScoreProps = {
  score: number
}

export const GameScore: React.FC<GameScoreProps> = ({ score }) => {
  return (
    <div className={styles['game-score']}>
      <p>Очки: {score}</p>
    </div>
  )
}
