import { ErrorBoundary } from '@/shared/components'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/app/styles'

export const Providers = ({ children }: { children: JSX.Element }) => (
  <ErrorBoundary fallback={<>Something wrong</>}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
)
