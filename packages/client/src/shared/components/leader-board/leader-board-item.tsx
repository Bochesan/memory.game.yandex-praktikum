import React from 'react'
import { LeaderBoardItemType } from '@/shared/services/leader-board/types'
import styles from './styles.module.css'

export const LeaderBoardItem: React.FC<LeaderBoardItemType> = ({
  place,
  avatar,
  nickname,
  firstname,
  score,
}) => {
  return (
    <div className={styles['leader-board-item']}>
      <div className={styles['leader-board-item__place']}>{place}</div>
      <div className={styles['leader-board-item__avatar']}>
        <div className={styles['leader-board-item__avatar-wrap']}>
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
      <div className={styles['leader-board-item__name']}>
        <strong>{nickname}</strong>
        <span>{firstname}</span>
      </div>
      <div className={styles['leader-board-item__score']}>{score}</div>
    </div>
  )
}
