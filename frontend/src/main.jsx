import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PrivacyPage, TosPage } from './pages/Legal.jsx'
import { ThemeProvider } from './theme.jsx'
import './index.css'

function Router() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/privacy') return <PrivacyPage />
  if (path === '/tos') return <TosPage />
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
)
