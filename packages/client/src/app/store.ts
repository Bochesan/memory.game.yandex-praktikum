// store.js
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlices } from '@/shared/slices'

// TODO: в будущем сделать норм тип
export function createReduxStore(initState?: object) {
  const store = configureStore({
    reducer: {
      [apiSlices.reducerPath]: apiSlices.reducer,
    },
    preloadedState: initState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlices.middleware),
  })

  setupListeners(store.dispatch)

  return store
}
