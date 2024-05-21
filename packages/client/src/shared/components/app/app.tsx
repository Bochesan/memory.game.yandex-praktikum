import { ErrorBoundary } from '../error-boundary'
import { Outlet } from 'react-router-dom'

export const App = () => (
  <ErrorBoundary fallback="Произошла ошибка">
    <Outlet />
  </ErrorBoundary>
)
