import Mediator from '@/shared/controllers/mediator'
import { GameLevelType } from '@/shared/services/game/types'
import { CARD_MARGIN, PATH_SPRITE, PATH_SPRITE_CARD } from './constants'

const eventBus = new Mediator()
let level: GameLevelType | any = {}

eventBus.on('game:level', payload => {
  level = payload
})

export class GameView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  images: HTMLImageElement[]
  imageDefault: HTMLImageElement

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')!
    this.images = []
    this.imageDefault = new Image()
  }

  loadImages(cards: string[], callback: () => void): void {
    // Дефолтная карта
    this.imageDefault.src = PATH_SPRITE_CARD
    // Остальные карты
    let loadedImages = 0
    cards.forEach((src, index) => {
      const img = new Image()
      img.src = `${PATH_SPRITE}/${src}`
      img.onload = () => {
        loadedImages++
        if (loadedImages === cards.length) {
          callback()
        }
      }
      this.images[index] = img
    })
  }

  drawCard(
    x: number,
    y: number,
    card: string,
    flipped: boolean,
    flipProgress: number
  ): void {
    this.ctx.clearRect(x, y, level.cardWidth, level.cardHeight)
    this.ctx.save()
    this.ctx.translate(x + level.cardWidth / 2, y + level.cardHeight / 2)
    this.ctx.scale(Math.cos(flipProgress * Math.PI), 1)
    this.ctx.translate(-level.cardWidth / 2, -level.cardHeight / 2)

    if (flipProgress > 0.5) {
      const img = this.images.find(image => image.src.includes(card))
      if (img) {
        this.ctx.drawImage(img, 0, 0, level.cardWidth, level.cardHeight)
      }
    } else {
      this.ctx.drawImage(
        this.imageDefault,
        0,
        0,
        level.cardWidth,
        level.cardHeight
      )
    }

    this.ctx.restore()
  }

  drawCards(
    cards: string[],
    flippedCards: number[],
    matchedCards: number[],
    flipProgress: number[]
  ): void {
    cards.forEach((card, index) => {
      const x = (index % level.cardCol) * (level.cardWidth + CARD_MARGIN)
      const y =
        Math.floor(index / level.cardCol) * (level.cardHeight + CARD_MARGIN)
      const flipped =
        flippedCards.includes(index) || matchedCards.includes(index)
      const progress = flipProgress[index] || 0
      this.drawCard(x, y, card, flipped, progress)
    })
  }
}
