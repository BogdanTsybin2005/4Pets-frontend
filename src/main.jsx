import './index.css';
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 
 
import { LanguageProvider } from './context/LanguageContext.jsx'
import { AuthorizationContext } from './context/AuthorizationContext.jsx'

import { RegistrationProvider } from './context/RegistrationContext.jsx';
 
 
const queryClient = new QueryClient()

 createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <RegistrationProvider>
            <AuthorizationContext>
              <LanguageProvider>
                <App />
              </LanguageProvider>
            </AuthorizationContext>
          </RegistrationProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>,
 )
