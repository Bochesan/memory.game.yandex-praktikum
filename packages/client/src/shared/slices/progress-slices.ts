import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProgressState {
  completedLevels: number[]
  selectedLevel: number
  userLevel: number
  userScore: number
}

const initialState: ProgressState = {
  completedLevels: [1],
  selectedLevel: 1,
  userLevel: 1,
  userScore: 0,
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    resetProgress: state => {
      state.completedLevels = [1]
      state.selectedLevel = 1
      state.userLevel = 1
      state.userScore = 0
    },
    completeLevel: (state, action: PayloadAction<number>) => {
      state.completedLevels.push(action.payload)
    },
    selectLevel: (state, action: PayloadAction<number>) => {
      state.selectedLevel = action.payload
    },
    levelUp: (state, action: PayloadAction<number>) => {
      state.userLevel = action.payload
    },
    scoreUp: (state, action: PayloadAction<number>) => {
      state.userScore += action.payload
    },
  },
})

export const { resetProgress, completeLevel, selectLevel, levelUp, scoreUp } =
  progressSlice.actions
