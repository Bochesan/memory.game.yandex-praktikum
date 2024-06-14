import { GameCanvas } from '@/shared/components'
import { ComponentRender } from '@/shared/lib/tests/ComponentRender'
import { GameLevelType } from '@/shared/services/game/types'
import { screen } from '@testing-library/react'

const mockLvl: GameLevelType = {
  canvasHeight: 881,
  canvasWidth: 891,
  cardCol: 3,
  cardCount: 6,
  cardHeight: 435.5,
  cardRow: 2,
  cardValues: [],
  cardWidth: 290,
  description: 'Правила',
  gameTimer: 30,
  id: 1,
  title: 'Начало пути',
}

describe('Navigation', () => {
  beforeEach(() => {
    ComponentRender(
      <GameCanvas
        isPause={true}
        level={mockLvl}
        onPlay={() => {
          ;('')
        }}
        onScore={() => {
          ;('')
        }}
        onVictory={() => {
          ;('')
        }}
        restartKey={0}
      />
    )
  })

  test('test render', () => {
    expect(screen.getByTestId('game-canvas')).toBeInTheDocument()
  })

  test('test height && width', () => {
    expect(screen.getByTestId('game-canvas').getAttribute('width')).toEqual(
      mockLvl.canvasWidth.toString()
    )
    expect(screen.getByTestId('game-canvas').getAttribute('height')).toEqual(
      mockLvl.canvasHeight.toString()
    )
  })
})
