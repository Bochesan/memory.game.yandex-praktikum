export type GameLevelType = {
  id: number
  title: string
  description: string
  gameTimer: number
  cardCount: number
  cardCol: number
  cardRow: number
  cardValues: string[]
  cardWidth: number
  cardHeight: number
  canvasWidth: number
  canvasHeight: number
}

export type GameLevelParamsType = Omit<
  GameLevelType,
  | 'cardRow'
  | 'cardValues'
  | 'cardWidth'
  | 'cardHeight'
  | 'canvasWidth'
  | 'canvasHeight'
>
