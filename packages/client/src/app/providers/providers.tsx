import { ErrorBoundary } from '@/shared/components'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/app/styles'
import { StoreProvider } from './StoreProvider'

export const Providers = ({ children }: { children: JSX.Element }) => (
  <ErrorBoundary fallback={<>Something wrong</>}>
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StoreProvider>
  </ErrorBoundary>
)
