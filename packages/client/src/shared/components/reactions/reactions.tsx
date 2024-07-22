import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'
import { arrEmoji } from '@/shared'

interface Reaction {
  emoji: string
  count: number
  picked: boolean
}

// Моковые данные
const mockReactionsList = [
  {
    emoji: '1F600',
    count: 10,
    picked: false,
  },
  {
    emoji: '1F601',
    count: 5,
    picked: true,
  },
  {
    emoji: '1F602',
    count: 3,
    picked: false,
  },
  {
    emoji: '1F603',
    count: 2,
    picked: false,
  },
]

export const Reactions = ({ forumId }: { forumId: number }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [reactions, setReactions] = useState<Reaction[]>([])

  // Моковая функция отправки новой реакции
  const mockReactions = (emoji: string) => {
    const newReactions = [...mockReactionsList]
    const existingReactionIndex = newReactions.findIndex(
      reaction => reaction.emoji === emoji
    )
    const pickedReactionIndex = newReactions.findIndex(
      reaction => reaction.picked
    )

    if (existingReactionIndex !== -1) {
      if (!newReactions[existingReactionIndex].picked) {
        newReactions[pickedReactionIndex] = {
          ...newReactions[pickedReactionIndex],
          count: newReactions[pickedReactionIndex].count - 1,
          picked: false,
        }
        newReactions[existingReactionIndex] = {
          ...newReactions[existingReactionIndex],
          count: newReactions[existingReactionIndex].count + 1,
          picked: true,
        }
      }
    } else {
      newReactions[pickedReactionIndex] = {
        ...newReactions[pickedReactionIndex],
        count: newReactions[pickedReactionIndex].count - 1,
        picked: false,
      }
      newReactions.push({
        emoji,
        count: 1,
        picked: true,
      })
    }
    return setReactions(newReactions)
  }

  const handleShowEmoji = () => {
    setIsOpen(true)
  }

  const handleHideEmoji = () => {
    setIsOpen(false)
  }

  // const handleSetEmoji = (emoji: string) => {
  //   // Нужно отправить новую реакцию и получить список заново
  // }

  useEffect(() => {
    const getEmoji = async (forumId: number) => {
      try {
        // Запрос за реакциями для конкретного форума по его id
        // Моковый запрос
        const response = {
          ok: true,
          json: () => mockReactionsList,
        }
        if (response.ok) {
          const data = await response.json()
          setReactions(data)
        } else {
          throw new Error('Failed to fetch reactions')
        }
      } catch (error) {
        console.error('Error fetching reactions:', error)
      }
    }
    getEmoji(forumId)
  }, [forumId])

  const listEmoji = arrEmoji.map(emoji => (
    <div
      className={styles.reactions__emoji}
      key={emoji}
      onClick={() => mockReactions(emoji)}>
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
      onClick={() => mockReactions(emoji.emoji)}>
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
        <div className={styles.reactions__list_active}>{activeEmoji}</div>
        <div className={styles.reactions__button} onClick={handleShowEmoji}>
          +
        </div>
      </div>
      {isOpen && <div className={styles.reactions__grids}>{listEmoji}</div>}
    </div>
  )
}
