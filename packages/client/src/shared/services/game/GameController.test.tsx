import { GameController } from './GameController'
import { GameModel } from './GameModel'
import { GameView } from './GameView'
import 'jest-canvas-mock'

class GameControllerTest extends GameController {
  constructor(model: GameModel, view: GameView) {
    super(model, view)
  }
}

const update = jest.fn()
const onWin = jest.fn()

const ModelTest = new GameModel(['1', '2', '3'], update, onWin)

const ViewTest = new GameView(document.createElement('canvas'))

const ControllerTest = new GameControllerTest(ModelTest, ViewTest)

describe('Game controller', () => {
  test('score increment', () => {
    ControllerTest.model.checkWin()
    expect(ControllerTest.model.score).toBe(2)
  })

  test('restart', () => {
    ControllerTest.handleRestart()
    expect(ControllerTest.model.score).toBe(0)
  })
})
