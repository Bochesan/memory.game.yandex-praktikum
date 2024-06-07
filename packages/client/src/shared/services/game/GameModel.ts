import { CARD_SCORE } from './constants'

export class GameModel {
  cards: string[]
  flippedCards: number[]
  matchedCards: number[]
  score: number
  onUpdate: () => void
  onWin: () => void

  constructor(cardValues: string[], onUpdate: () => void, onWin: () => void) {
    this.cards = this.shuffle([...cardValues])
    this.flippedCards = []
    this.matchedCards = []
    this.score = 0
    this.onUpdate = onUpdate
    this.onWin = onWin
  }

  shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  flipCard(index: number): void {
    if (this.flippedCards.length < 2) {
      this.flippedCards.push(index)
      this.onUpdate()
      if (this.flippedCards.length === 2) {
        this.onUpdate()
      }
    }
  }

  unflipCards(): void {
    this.flippedCards = []
    this.onUpdate()
  }

  checkWin(): void {
    this.matchedCards.push(...this.flippedCards)
    this.flippedCards = []
    this.score += CARD_SCORE
    this.onUpdate()
    if (this.matchedCards.length === this.cards.length) {
      this.onWin()
    }
  }

  reset(): void {
    this.cards = this.shuffle([...this.cards])
    this.flippedCards = []
    this.matchedCards = []
    this.score = 0
    this.onUpdate()
  }
}
