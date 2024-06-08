import {
  computCardRow,
  computCardWidth,
  computCardHeight,
  computCanvasWidth,
  computCanvasHeight,
  createCardValues,
} from './utils'
import { GameLevelParamsType, GameLevelType } from './types'

export const PATH_SPRITE = '/game'
export const PATH_SPRITE_CARD = '/game/card.png'
export const PATH_SPRITE_CARD_HOVER = '/game/card-hover.png'

export const FRAME_TIMOUT = 500
export const CARD_MARGIN = 10
export const CARD_SCORE = 2

const GAME_LEVELS_PARAMS: GameLevelParamsType[] = [
  {
    id: 1,
    title: 'Начало пути',
    description: 'Правила игры',
    gameTimer: 30,
    cardCount: 6,
    cardCol: 3,
  },
  {
    id: 2,
    title: 'Луговая тропа',
    description: 'Описание уровня',
    gameTimer: 30,
    cardCount: 8,
    cardCol: 4,
  },
  {
    id: 3,
    title: 'Преозерье',
    description: 'Правила игры',
    gameTimer: 30,
    cardCount: 10,
    cardCol: 5,
  },
]

export const GAME_LEVELS: GameLevelType[] = GAME_LEVELS_PARAMS.map(
  (level: GameLevelParamsType) => {
    const cardRow = computCardRow(level.cardCount, level.cardCol)
    const cardValues = createCardValues(level.cardCount)
    const cardWidth = computCardWidth(level.cardCol, cardRow, CARD_MARGIN)
    const cardHeight = computCardHeight(cardWidth)
    const canvasWidth = computCanvasWidth(cardWidth, level.cardCol, CARD_MARGIN)
    const canvasHeight = computCanvasHeight(cardHeight, cardRow, CARD_MARGIN)
    return {
      ...level,
      cardRow,
      cardValues,
      cardWidth,
      cardHeight,
      canvasWidth,
      canvasHeight,
    }
  }
)
