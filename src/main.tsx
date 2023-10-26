import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/fonts/stylesheet.css'
import './styles/main.min.css'
import { ContextProvider } from './context/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
)
