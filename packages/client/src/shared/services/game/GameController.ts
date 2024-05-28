import { GameModel } from './GameModel'
import { GameView } from './GameView'
import { CARD_COL, CARD_WIDTH, CARD_HEIGHT, CARD_MARGIN } from './constants'

export class GameController {
  model: GameModel
  view: GameView

  constructor(model: GameModel, view: GameView) {
    this.model = model
    this.view = view
  }

  handleCardClick(x: number, y: number): void {
    const cardWidth = CARD_WIDTH
    const cardHeight = CARD_HEIGHT
    const margin = CARD_MARGIN

    const col = Math.floor(x / (cardWidth + margin))
    const row = Math.floor(y / (cardHeight + margin))
    const index = row * CARD_COL + col

    this.model.flipCard(index)
  }

  handleRestart(): void {
    this.model.reset()
  }

  getScore(): number {
    return this.model.score
  }

  updateView(): void {
    this.view.drawCards(
      this.model.cards,
      this.model.flippedCards,
      this.model.matchedCards
    )
  }
}
