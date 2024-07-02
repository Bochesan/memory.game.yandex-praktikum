import React from 'react'
import { RESOURCES } from '@/utils'
import { TLeaderBoardItemProps } from '@/types'
import styles from './styles.module.css'

export const LeaderBoardItem: React.FC<TLeaderBoardItemProps> = ({
  place,
  avatar,
  nickname,
  firstname,
  level,
  scorePSS,
}) => {
  return (
    <div className={styles['leader-board-item']}>
      <div className={styles['leader-board-item__place']}>{place}</div>
      <div className={styles['leader-board-item__avatar']}>
        <div className={styles['leader-board-item__avatar-wrap']}>
          <img src={`${RESOURCES.Images}${avatar}`} alt="Avatar" />
        </div>
      </div>
      <div className={styles['leader-board-item__name']}>
        <strong>{nickname}</strong>
        <span>{firstname}</span>
      </div>
      <div className={styles['leader-board-item__level']}>
        <small>Lvl.</small>
        {level}
      </div>
      <div className={styles['leader-board-item__score']}>{scorePSS}</div>
    </div>
  )
}
