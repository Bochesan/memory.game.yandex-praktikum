import React, { useState, useEffect, useRef } from 'react'

// Параметры игры
const CARD_VALUES: string[] = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D']
const CARD_WIDTH = 100
const CARD_HEIGHT = 150
const CARD_MARGIN = 10
const CANVAS_WIDTH = 450
const CANVAS_HEIGHT = 350

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
 * cards - массив карт
 * flippedCards - массив индексов перевернутых карт
 * matchedCards - массив индексов совпавших карт
 */
export const GamePage: React.FC = () => {
  const [cards, setCards] = useState<string[]>(shuffle([...CARD_VALUES]))
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedCards, setMatchedCards] = useState<number[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Используем useEffect для перерисовки карт при изменении состояния
  useEffect(() => {
    drawCards()
  }, [cards, flippedCards, matchedCards])

  // Управляет логикой переворачивания карт и проверкой совпадений
  const handleCardClick = (index: number) => {
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
      }
      setTimeout(() => {
        setFlippedCards([])
      }, 1000)
    }
  }

  // Рисует карты на Canvas
  const drawCards = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    cards.forEach((card, index) => {
      const x = (index % 4) * (CARD_WIDTH + CARD_MARGIN)
      const y = Math.floor(index / 4) * (CARD_HEIGHT + CARD_MARGIN)

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
    <>
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
          const index = row * 4 + col

          handleCardClick(index)
        }}
      />
    </>
  )
}
