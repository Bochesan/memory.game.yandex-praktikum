import Mediator from '@/shared/controllers/mediator'
import { useState } from 'react'
import { GameLevelType } from '@/shared/services/game/types'
import { LEVELS_INFO } from '@/shared/services/game/constants'

type UseLevelOutput = [GameLevelType, (value: number) => void]

const eventBus = new Mediator()

export const useLevel = (levelId: number): UseLevelOutput => {
  const levelDefault =
    LEVELS_INFO.find(level => level.id === levelId) || LEVELS_INFO[0]
  const [level, setLevel] = useState<GameLevelType>(levelDefault)
  eventBus.emit('game:level', levelDefault)

  const set = (levelId: number) => {
    const level =
      LEVELS_INFO.find(level => level.id === levelId) || LEVELS_INFO[0]
    setLevel(level)
    eventBus.emit('game:level', level)
  }

  return [level, set]
}
