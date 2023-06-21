import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SettingsContextProvider, { SettingsContext } from './context/SettingsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>
    
  
)