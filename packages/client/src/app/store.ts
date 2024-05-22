// store.js
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlices } from '@/shared/slices'

export const store = configureStore({
  reducer: {
    [apiSlices.reducerPath]: apiSlices.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlices.middleware),
})

setupListeners(store.dispatch)
