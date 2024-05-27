import { CARD_COL, CARD_WIDTH, CARD_HEIGHT, CARD_MARGIN } from './constants'

export class GameView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')!
  }

  drawCards(
    cards: string[],
    flippedCards: number[],
    matchedCards: number[]
  ): void {
    const cardWidth = CARD_WIDTH
    const cardHeight = CARD_HEIGHT
    const margin = CARD_MARGIN

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    cards.forEach((card, index) => {
      const x = (index % CARD_COL) * (cardWidth + margin)
      const y = Math.floor(index / CARD_COL) * (cardHeight + margin)

      if (flippedCards.includes(index) || matchedCards.includes(index)) {
        this.ctx.fillStyle = 'lightgray'
        this.ctx.fillRect(x, y, cardWidth, cardHeight)
        this.ctx.fillStyle = 'black'
        this.ctx.font = '30px Arial'
        this.ctx.fillText(card, x + cardWidth / 2 - 10, y + cardHeight / 2 + 10)
      } else {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(x, y, cardWidth, cardHeight)
      }
    })
  }
}
