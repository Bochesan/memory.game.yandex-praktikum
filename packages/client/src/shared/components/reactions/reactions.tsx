import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'
import { arrEmoji, useGetUserQuery } from '@/shared'
import {
  useGetReactionsQuery,
  useSetReactionMutation,
  renderError,
} from '@/shared'

interface Reaction {
  emoji: string
  count: number
  picked: boolean
}

export const Reactions = ({ forumId }: { forumId: number }) => {
  const { currentData } = useGetUserQuery()
  const { data, refetch } = useGetReactionsQuery({
    topic_id: forumId,
    user_id: currentData ? currentData.id : undefined,
  })
  const [createReaction] = useSetReactionMutation()
  const [isOpen, setIsOpen] = useState(false)
  const [reactions, setReactions] = useState<Reaction[]>([])

  useEffect(() => {
    if (data) {
      setReactions(data)
    }
  }, [data])

  const handleShowEmoji = () => {
    setIsOpen(true)
  }

  const handleHideEmoji = () => {
    setIsOpen(false)
  }

  const handleSetReaction = (emoji: string) => {
    if (currentData) {
      createReaction({
        topic_id: forumId,
        user_id: currentData.id,
        reaction_type: emoji,
      })
        .unwrap()
        .then(() => refetch())
        .catch(error => {
          console.error('Ошибка при добавлении реакции:', error)
        })
    }
  }

  const listEmoji = arrEmoji.map(emoji => (
    <div
      className={styles.reactions__emoji}
      key={emoji}
      onClick={() => handleSetReaction(emoji)}>
      {String.fromCodePoint(parseInt(emoji, 16))}
    </div>
  ))

  const activeEmoji = reactions.map(emoji => (
    <div
      className={classNames(
        styles.reactions__list_active_emoji,
        emoji.picked && styles.reactions__list_active_emoji_picked
      )}
      key={emoji.emoji}
      onClick={() => handleSetReaction(emoji.emoji)}>
      {String.fromCodePoint(parseInt(emoji.emoji, 16))}
      {emoji.count > 1 && (
        <span className={styles.reactions__list_active_emoji_count}>
          {emoji.count}
        </span>
      )}
    </div>
  ))

  return (
    <div className={styles.reactions} onMouseLeave={handleHideEmoji}>
      <div className={styles.reactions__list}>
        {activeEmoji.length > 0 && (
          <div className={styles.reactions__list_active}>{activeEmoji}</div>
        )}
        <div className={styles.reactions__button} onClick={handleShowEmoji}>
          +
        </div>
      </div>
      {/*{isOpen && <div className={styles.reactions__grids}>{listEmoji}</div>}*/}
      {isOpen && (
        <div className={styles.reactions__grids_layout}>
          <div className={styles.reactions__grids}>{listEmoji}</div>
        </div>
      )}
    </div>
  )
}
