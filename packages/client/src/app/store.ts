import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlices, progressSlice } from '@/shared/slices'

const rootReducer = combineReducers({
  [apiSlices.reducerPath]: apiSlices.reducer,
  [progressSlice.reducerPath]: progressSlice.reducer,
})

// TODO: в будущем сделать норм тип
export function createReduxStore(initState?: object) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlices.middleware),
  })

  setupListeners(store.dispatch)

  return store
}

export type RootState = ReturnType<typeof createReduxStore>['getState']
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
