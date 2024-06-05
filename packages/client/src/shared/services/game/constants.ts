import { createCardValues } from './utils'

export const PATH_SPRITE = '/game'
export const PATH_SPRITE_CARD = '/game/card.png'
export const PATH_SPRITE_CARD_HOVER = '/game/card-hover.png'

export const FRAME_TIMOUT = 500

export const GAME_TIMER = 30
export const CARD_COUNT = 10
export const CARD_COL = 5
export const CARD_MARGIN = 10
export const CARD_SCORE = 2

export const CARD_VALUES: string[] = createCardValues(CARD_COUNT)
export const CARD_ROW = Math.round(CARD_COUNT / CARD_COL)

// Вычисляем размер карты исходя из размера экрана
const canvasMarginLeft = 300
const canvasMarginTop = 100
const windowWidth = window.innerWidth - canvasMarginLeft
const windowHeight = window.innerHeight - canvasMarginTop
let cardWidthTemp = windowWidth / CARD_COL - CARD_MARGIN
let cardHeightTemp = cardWidthTemp * 1.5
if (windowHeight - CARD_ROW * (cardHeightTemp + CARD_MARGIN) < 0) {
  cardHeightTemp = windowHeight / CARD_ROW - CARD_MARGIN
  cardWidthTemp = cardHeightTemp / 1.5
}
export const CARD_WIDTH = cardWidthTemp
export const CARD_HEIGHT = CARD_WIDTH * 1.5

export const CANVAS_WIDTH = CARD_WIDTH * CARD_COL + CARD_MARGIN * (CARD_COL - 1)
export const CANVAS_HEIGHT =
  CARD_HEIGHT * CARD_ROW + CARD_MARGIN * (CARD_ROW - 1)
