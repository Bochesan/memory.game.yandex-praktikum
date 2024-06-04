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

  return cardImages.slice(0, 2 * count)
}
