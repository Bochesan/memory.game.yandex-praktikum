import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/app/store'
import {
  resetProgress,
  completeLevel,
  selectLevel,
  levelUp,
  scoreUp,
} from '@/shared/slices'

export const useProgress = () => {
  const dispatch = useDispatch<AppDispatch>()

  const completedLevels = useSelector(
    (state: RootState) => state.progress.completedLevels
  )
  const selectedLevel = useSelector(
    (state: RootState) => state.progress.selectedLevel
  )
  const userLevel = useSelector((state: RootState) => state.progress.userLevel)
  const userScore = useSelector((state: RootState) => state.progress.userScore)

  const handleResetProgress = () => {
    dispatch(resetProgress())
  }

  const handleCompleteLevel = (level: number) => {
    dispatch(completeLevel(level))
  }

  const handleSelectLevel = (level: number) => {
    dispatch(selectLevel(level))
  }

  const handleLevelUp = (level: number) => {
    dispatch(levelUp(level))
  }

  const handleScoreUp = (score: number) => {
    dispatch(scoreUp(score))
  }

  return {
    completedLevels,
    selectedLevel,
    userLevel,
    userScore,
    resetProgress: handleResetProgress,
    completeLevel: handleCompleteLevel,
    selectLevel: handleSelectLevel,
    levelUp: handleLevelUp,
    scoreUp: handleScoreUp,
  }
}
