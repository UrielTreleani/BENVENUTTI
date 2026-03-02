import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MobileFilterContextProvider } from './Contexts/MobileFilterContext/MobileFilterContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <MobileFilterContextProvider>
        <App />
      </MobileFilterContextProvider>
    </StrictMode>
  </BrowserRouter>
)
