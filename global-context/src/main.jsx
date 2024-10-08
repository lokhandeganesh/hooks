import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from './components/Context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </StrictMode>,
)
