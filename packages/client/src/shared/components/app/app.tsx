import { Container } from '@mui/material'
import { ErrorBoundary } from '../error-boundary'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthGuard } from '@/app/guards'

export const App = () => (
  <ErrorBoundary fallback={<Navigate to="/error" />}>
    <AuthGuard>
      <Container disableGutters maxWidth={false}>
        <Outlet />
      </Container>
    </AuthGuard>
  </ErrorBoundary>
)
