import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ErrorBoundary } from './shared'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h2>Произошла ошибка</h2>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
