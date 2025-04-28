import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { LanguageProvider } from './context/LanguageContext.jsx'
import { AuthorizationContext } from './context/LuthorizationContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthorizationContext>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </AuthorizationContext>
    </BrowserRouter>
  </StrictMode>,
)
