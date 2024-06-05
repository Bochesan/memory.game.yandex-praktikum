import React from 'react'
import { CARD_COUNT, CARD_SCORE } from '@/shared/services/game/constants'
import styles from './styles.module.css'

type GameScoreProps = {
  score: number
}

export const GameScore: React.FC<GameScoreProps> = ({ score }) => {
  const scorePercent = (score / ((CARD_COUNT * CARD_SCORE) / 2)) * 100

  return (
    <div className={styles['game-score']}>
      <div className={styles['game-score__level']}>
        <div className={styles['game-score__level-wrap']}>
          <b>Ур.</b>
          <strong>13</strong>
          <i>
            {score}
            <span>/1199</span>
          </i>
        </div>
      </div>
      <div className={styles['game-score__scale']}>
        <div className={styles['game-score__ampula']}></div>
        <div className={styles['game-score__line']}>
          <div
            className={styles['game-score__line-wrap']}
            style={{ height: `${scorePercent}%` }}>
            <div className={styles['game-score__line-progress']}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
