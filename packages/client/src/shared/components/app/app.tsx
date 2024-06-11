import { Container } from '@mui/material'
import { ErrorBoundary } from '@/shared'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthGuard } from '@/app/guards'

export const App = () => {
  return (
    <ErrorBoundary fallback={<Navigate to="/error" />}>
      <Container disableGutters maxWidth={false}>
        <AuthGuard>
          <Outlet />
        </AuthGuard>
      </Container>
    </ErrorBoundary>
  )
}
