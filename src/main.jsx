import './index.css';
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'


import { LanguageProvider } from './context/LanguageContext.jsx'
import { AuthorizationContext } from './context/AuthorizationContext.jsx'

import { RegistrationProvider } from './context/RegistrationContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RegistrationProvider>
        <AuthorizationContext>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </AuthorizationContext>
      </RegistrationProvider>
    </BrowserRouter>
  </StrictMode>,
)
