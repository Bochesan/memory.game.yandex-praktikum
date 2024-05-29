import { Container } from '@mui/material'
import { ErrorBoundary } from '../error-boundary'
import { Navigate, Outlet } from 'react-router-dom'

export const App = () => (
  <ErrorBoundary fallback={<Navigate to="/error" />}>
    <Container disableGutters maxWidth={false}>
      <Outlet />
    </Container>
  </ErrorBoundary>
)
