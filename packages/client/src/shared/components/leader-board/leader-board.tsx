import React from 'react'
import { useGetLeaderboardQuery, renderError } from '@/shared'
import { Spinner } from '@/shared/components'
import { IDENTIFIER } from '@/utils'
import { LeaderBoardItem } from './leader-board-item'
import styles from './styles.module.css'

export const LeaderBoard: React.FC = () => {
  const { data, error, isLoading } = useGetLeaderboardQuery({
    teamName: IDENTIFIER.TeamName,
    ratingFieldName: IDENTIFIER.LeaderboardRatingFieldName,
    cursor: 0,
    limit: 10,
  })

  if (!data) return null

  return (
    <div className={styles['leader-board']}>
      {isLoading && (
        <div className={styles['leader-board__loading']}>
          <Spinner />
        </div>
      )}
      {error && (
        <div className={styles['leader-board__error']}>
          Ошибка: {renderError(error)}
        </div>
      )}
      {!isLoading && !data.length && (
        <div className={styles['leader-board__empty']}>
          Таблица лидеров пуста!
        </div>
      )}
      {!isLoading &&
        data.map((props, index) => (
          <LeaderBoardItem key={index} place={index + 1} {...props.data} />
        ))}
    </div>
  )
}
