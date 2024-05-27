import { createCardValues } from './utils'

export const GAME_TIMER = 30
export const CARD_COUNT = 10
export const CARD_COL = 5
export const CARD_WIDTH = 100
export const CARD_HEIGHT = 150
export const CARD_MARGIN = 10
export const CARD_SCORE = 2

export const CARD_VALUES: string[] = createCardValues(CARD_COUNT)
export const CARD_ROW = Math.round(CARD_COUNT / CARD_COL)
export const CANVAS_WIDTH = CARD_WIDTH * CARD_COL + CARD_MARGIN * (CARD_COL - 1)
export const CANVAS_HEIGHT =
  CARD_HEIGHT * CARD_ROW + CARD_MARGIN * (CARD_ROW - 1)
