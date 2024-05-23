import React from 'react'

type GameScoreProps = {
  score: number
}

export const GameScore: React.FC<GameScoreProps> = ({ score }) => {
  return (
    <div className="game-score">
      <p>Очки: {score}</p>
    </div>
  )
}
