import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

type GameCanvasProps = {
  isPause: boolean
  restartKey: number
  cardCount: number
  onScore: (score: number) => void
  onPlay: () => void
  onVictory: () => void
}

// Генерирует значения карт
function createCardValues(count: number): string[] {
  // Определяем набор возможных значений для карт
  const possibleValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const result: string[] = []
  const uniqueCount = count / 2

  // Проверяем, что значение count является четным числом
  if (count % 2 !== 0) {
    throw new Error('Число карт cardCount должно быть четным')
  }
  // Добавляем по два значения для каждой буквы
  for (let i = 0; i < uniqueCount; i++) {
    const value = possibleValues[i]
    result.push(value, value)
  }
  return result
}

// Перемешивает карты
const shuffle = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

/**
 * @param {boolean} isPause - пауза, по умолчанию true
 * @param {boolean} restartKey - ключ для сброса компонента
 * @param {number} cardCount - количество карт
 * @param {function} onScore - келбек паредающий очки
 * @param {function} onPlay - келбек снимающий паузу
 * @param {function} onVictory - келбек паредающий победу
 *
 * CARD_COL - количество столбцов
 * CARD_WIDTH - ширина карты px
 * CARD_HEIGHT - высоты карты px
 * CARD_MARGIN - расстояние между картами px
 * CARD_SCORE - количество очков за открытую пару
 *
 * cards - массив карт
 * flippedCards - массив индексов перевернутых карт
 * matchedCards - массив индексов совпавших карт
 */
export const GameCanvas: React.FC<GameCanvasProps> = ({
  isPause,
  restartKey,
  cardCount,
  onScore,
  onPlay,
  onVictory,
}) => {
  // Параметры игры
  const CARD_COUNT = cardCount
  const CARD_COL = 5
  const CARD_WIDTH = 100
  const CARD_HEIGHT = 150
  const CARD_MARGIN = 10
  const CARD_SCORE = 2

  // Вычисляемые параметры игры
  const CARD_VALUES: string[] = createCardValues(CARD_COUNT)
  const CARD_ROW = Math.round(CARD_COUNT / CARD_COL)
  const CANVAS_WIDTH = CARD_WIDTH * CARD_COL + CARD_MARGIN * (CARD_COL - 1)
  const CANVAS_HEIGHT = CARD_HEIGHT * CARD_ROW + CARD_MARGIN * (CARD_ROW - 1)

  const [cards, setCards] = useState<string[]>(shuffle([...CARD_VALUES]))
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedCards, setMatchedCards] = useState<number[]>([])
  const [isVictory, setVictory] = useState<boolean>(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Сброс игры
  useEffect(() => {
    setCards(shuffle([...CARD_VALUES]))
    setFlippedCards([])
    setMatchedCards([])
    setVictory(false)
  }, [restartKey])

  // Перерисовка карт при изменении состояния
  useEffect(() => {
    drawCards()
    handleVictory()
  }, [cards, flippedCards, matchedCards])

  // Управляет логикой переворачивания карт и проверкой совпадений
  const handleCardClick = (index: number) => {
    if (isPause) {
      onPlay()
    }

    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return
    }

    const newFlippedCards = [...flippedCards, index]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex])
        onScore(CARD_SCORE)
      }
      setTimeout(() => {
        setFlippedCards([])
      }, 500)
    }
  }

  // Обработка победы
  const handleVictory = (): void => {
    if (cards.length === matchedCards.length) {
      setVictory(true)
      if (isVictory) {
        onVictory()
      }
    }
  }

  // Рисует карты на Canvas
  const drawCards = (): void => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    cards.forEach((card, index) => {
      const x = (index % CARD_COL) * (CARD_WIDTH + CARD_MARGIN)
      const y = Math.floor(index / CARD_COL) * (CARD_HEIGHT + CARD_MARGIN)

      if (flippedCards.includes(index) || matchedCards.includes(index)) {
        ctx.fillStyle = 'lightgray'
        ctx.fillRect(x, y, CARD_WIDTH, CARD_HEIGHT)
        ctx.fillStyle = 'black'
        ctx.font = '30px Arial'
        ctx.fillText(card, x + CARD_WIDTH / 2 - 10, y + CARD_HEIGHT / 2 + 10)
      } else {
        ctx.fillStyle = 'blue'
        ctx.fillRect(x, y, CARD_WIDTH, CARD_HEIGHT)
      }
    })
  }

  return (
    <div className={styles['game-canvas']}>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        onClick={(e: React.MouseEvent<HTMLCanvasElement>) => {
          const rect = canvasRef.current!.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          const col = Math.floor(x / (CARD_WIDTH + CARD_MARGIN))
          const row = Math.floor(y / (CARD_HEIGHT + CARD_MARGIN))
          const index = row * CARD_COL + col

          handleCardClick(index)
        }}
      />
    </div>
  )
}
