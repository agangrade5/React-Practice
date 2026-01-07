import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Form } from 'react-router-dom'

import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)
