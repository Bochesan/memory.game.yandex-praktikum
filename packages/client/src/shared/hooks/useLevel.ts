import Mediator from '@/shared/controllers/mediator'
import { useState } from 'react'
import { GameLevelType } from '@/shared/services/game/types'
import { GAME_LEVELS } from '@/shared/services/game/constants'

type UseLevelOutput = [GameLevelType, (value: number) => void]

const eventBus = new Mediator()

export const useLevel = (levelId: number): UseLevelOutput => {
  const levelDefault =
    GAME_LEVELS.find(level => level.id === levelId) || GAME_LEVELS[0]
  const [state, setState] = useState<GameLevelType>(levelDefault)
  eventBus.emit('game:level', levelDefault)

  const set = (levelId: number) => {
    const level =
      GAME_LEVELS.find(level => level.id === levelId) || GAME_LEVELS[0]
    setState(level)
    eventBus.emit('game:level', level)
  }

  return [state, set]
}
