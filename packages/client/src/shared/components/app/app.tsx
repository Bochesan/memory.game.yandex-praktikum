import { Container } from '@mui/material'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthGuard } from '@/app/guards/auth-guard'
import { ErrorBoundary } from '../error-boundary/error-boundary'
import { Fullscreen } from '../fullscreen/fullscreen'

export const App = () => {
  return (
    <ErrorBoundary fallback={<Navigate to="/error" />}>
      <Container disableGutters maxWidth={false}>
        <AuthGuard>
          <Outlet />
        </AuthGuard>
        <Fullscreen />
      </Container>
    </ErrorBoundary>
  )
}
