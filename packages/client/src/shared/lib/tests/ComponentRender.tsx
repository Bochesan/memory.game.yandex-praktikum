import { StoreProvider } from '@/app/providers/StoreProvider'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

export interface componentRenderOptions {
  route?: string
  initState?: object
}

export const ComponentRender = (
  component: ReactNode,
  options: componentRenderOptions = {}
) => {
  const { route = '/', initState = {} } = options

  const info = render(
    <StoreProvider initState={initState}>
      {/* TODO: обернуть все в прод роутер с помощью createMemoryRouter (юзается createBrowserRouter в prod) */}
      (<MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>)
    </StoreProvider>
  )

  return info
}
