import ReactDOM from 'react-dom/client'

import { Routes } from './routes'
import { Providers } from './providers'

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Providers>
    <Routes />
  </Providers>
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
  })
}
