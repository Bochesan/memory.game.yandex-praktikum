export const createCardValues = (count: number): string[] => {
  const possibleValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const result: string[] = []
  const uniqueCount = count / 2

  if (count % 2 !== 0) {
    throw new Error('Число карт cardCount должно быть четным')
  }
  for (let i = 0; i < uniqueCount; i++) {
    const value = possibleValues[i]
    result.push(value, value)
  }
  return result
}
