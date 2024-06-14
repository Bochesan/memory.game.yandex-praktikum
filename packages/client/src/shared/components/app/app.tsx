import { Container } from '@mui/material'
import { ErrorBoundary, Fullscreen } from '@/shared'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthGuard } from '@/app/guards'
import React from 'react'

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
