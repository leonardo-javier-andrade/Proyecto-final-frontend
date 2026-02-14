import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

import{App} from './components/App.jsx'


// Agregado de estilos css
import "./styles/main.css"






createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
