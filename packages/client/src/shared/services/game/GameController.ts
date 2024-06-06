import Mediator from '@/shared/controllers/mediator'
import { GameLevelType } from '@/shared/services/game/types'
import { GameModel } from './GameModel'
import { GameView } from './GameView'
import { FRAME_TIMOUT, CARD_MARGIN } from './constants'

const eventBus = new Mediator()
let level: GameLevelType | any = {}

eventBus.on('game:level', payload => {
  level = payload
})

export class GameController {
  model: GameModel
  view: GameView
  flipProgress: number[]
  isAnimating: boolean

  constructor(model: GameModel, view: GameView) {
    this.model = model
    this.view = view
    this.flipProgress = new Array(model.cards.length).fill(0)
    this.isAnimating = false
  }

  handleCardClick(x: number, y: number): void {
    if (this.isAnimating) {
      return
    }
    const index = this.getCardIndex(x, y)
    if (
      index !== null &&
      !this.model.flippedCards.includes(index) &&
      !this.model.matchedCards.includes(index)
    ) {
      this.flipCard(index)
      this.model.flipCard(index)

      if (this.model.flippedCards.length === 2) {
        this.isAnimating = true
        const [first, second] = this.model.flippedCards
        if (this.model.cards[first] === this.model.cards[second]) {
          setTimeout(() => {
            this.model.checkWin()
            this.updateView()
            this.isAnimating = false
          }, FRAME_TIMOUT)
        } else {
          setTimeout(() => {
            this.flipBackCards(first, second)
            this.model.unflipCards()
            this.updateView()
            this.isAnimating = false
          }, FRAME_TIMOUT)
        }
      }
    }
  }

  getCardIndex(x: number, y: number): number | null {
    const col = Math.floor(x / (level.cardWidth + CARD_MARGIN))
    const row = Math.floor(y / (level.cardHeight + CARD_MARGIN))
    const index = row * level.cardCol + col
    if (index >= 0 && index < this.model.cards.length) {
      return index
    }
    return null
  }

  flipCard(index: number): void {
    const duration = FRAME_TIMOUT / 2
    const startTime = performance.now()

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      this.flipProgress[index] = progress
      this.updateView()

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }

  flipBackCards(first: number, second: number): void {
    const duration = FRAME_TIMOUT / 2
    const startTime = performance.now()

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      this.flipProgress[first] = 1 - progress
      this.flipProgress[second] = 1 - progress
      this.updateView()

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }

  updateView(): void {
    this.view.drawCards(
      this.model.cards,
      this.model.flippedCards,
      this.model.matchedCards,
      this.flipProgress
    )
  }

  handleRestart(): void {
    this.model.reset()
    this.flipProgress.fill(0)
    this.updateView()
  }

  getScore(): number {
    return this.model.score
  }
}
