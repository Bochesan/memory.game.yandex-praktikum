export const createCardValues = (count: number): string[] => {
  if (count % 2 !== 0) {
    throw new Error('Число карт CARD_COUNT должно быть четным')
  }

  const cardImages: string[] = [
    'card-1.png',
    'card-1.png',
    'card-2.png',
    'card-2.png',
    'card-3.png',
    'card-3.png',
    'card-4.png',
    'card-4.png',
    'card-5.png',
    'card-5.png',
  ]

  return cardImages.slice(0, count)
}

export const computCardRow = (count: number, col: number): number => {
  return Math.round(count / col)
}

export const computCardWidth = (col: number, row: number, margin: number) => {
  const canvasMarginLeft = 300
  const canvasMarginTop = 100
  const windowWidth = window.innerWidth - canvasMarginLeft
  const windowHeight = window.innerHeight - canvasMarginTop
  let cardWidth = windowWidth / col - margin
  let cardHeight = cardWidth * 1.5
  if (windowHeight - row * (cardHeight + margin) < 0) {
    cardHeight = windowHeight / row - margin
    cardWidth = cardHeight / 1.5
  }
  return cardWidth
}

export const computCardHeight = (width: number) => {
  return width * 1.5
}

export const computCanvasWidth = (
  cardWidth: number,
  col: number,
  margin: number
) => {
  return cardWidth * col + margin * (col - 1)
}

export const computCanvasHeight = (
  cardHeight: number,
  row: number,
  margin: number
) => {
  return cardHeight * row + margin * (row - 1)
}
