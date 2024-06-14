import { GameModel } from './GameModel'

class GameModelTest extends GameModel {
  constructor(cardValues: string[], onUpdate: () => void, onWin: () => void) {
    super(cardValues, onUpdate, onWin)
  }
}

const update = jest.fn()
const onWin = jest.fn()

describe('Game Model', () => {
  let ModelTest: GameModelTest
  beforeEach(() => {
    ModelTest = new GameModelTest(['1', '2', '3'], update, onWin)
  })
  test('unflip card', () => {
    ModelTest.unflipCards()
    expect(ModelTest.flippedCards).toEqual([])
    expect(update).toHaveBeenCalled()
  })

  test('not win game', () => {
    ModelTest.checkWin()
    expect(ModelTest.score).toBe(2)
    expect(ModelTest.flippedCards).toEqual([])
    expect(onWin).not.toHaveBeenCalled()
  })

  test('win game', () => {
    ModelTest.matchedCards = [1, 2, 3, 4, 5, 6]
    ModelTest.cards = ['1', '2', '3', '4', '5', '6']
    ModelTest.checkWin()
    expect(ModelTest.flippedCards).toEqual([])
    expect(onWin).toHaveBeenCalled()
  })
})
