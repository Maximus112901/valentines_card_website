import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './frameworks_and_drivers/web/App'
import { AppStateProvider } from './frameworks_and_drivers/web/context/AppStateContext'
import Modal from 'react-modal'

Modal.setAppElement('#root') // or your app root id

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </StrictMode>
)
