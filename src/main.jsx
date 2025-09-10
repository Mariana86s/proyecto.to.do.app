import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PaginaInicio from './pages/PaginaInicio'
import './style/estilo.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaInicio />
  </StrictMode>,
)


import React from 'react'

