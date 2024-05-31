import React, { useEffect, useState } from 'react'
import { leaderBoardList } from '@/shared/services/leader-board/LeaderBoardList'
import { Spinner } from '@/shared/components'
import { LeaderBoardItem } from './leader-board-item'
import { LeaderBoardItemType } from '@/shared/services/leader-board/types'
import styles from './styles.module.css'

export const LeaderBoard: React.FC = () => {
  const [data, setData] = useState<LeaderBoardItemType[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)

  const updateData = (data: LeaderBoardItemType[]) => {
    setData(data)
  }

  useEffect(() => {
    leaderBoardList.requestData(updateData)
  }, [])

  useEffect(() => {
    if (data.length) {
      setLoading(false)
    }
  }, [data])

  return (
    <div className={styles['leader-board']}>
      {isLoading && (
        <div className={styles['leader-board__loading']}>
          <Spinner />
        </div>
      )}
      {!isLoading &&
        data.map((props, index) => <LeaderBoardItem key={index} {...props} />)}
    </div>
  )
}
