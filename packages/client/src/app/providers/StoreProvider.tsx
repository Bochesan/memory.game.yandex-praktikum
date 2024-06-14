import { ReactNode } from 'react'
import { createReduxStore } from '../store'
import { Provider } from 'react-redux'

interface StoreProviderProps {
  children?: ReactNode
  // Типизация стейта для тестов - для определенного slice
  initState?: object
}

export const StoreProvider = ({ children, initState }: StoreProviderProps) => {
  const store = createReduxStore(initState)

  return <Provider store={store}>{children}</Provider>
}
