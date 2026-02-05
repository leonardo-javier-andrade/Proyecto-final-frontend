import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Chat} from './components/Chat.jsx'
import {Aside} from './components/Aside.jsx'



import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app">
      <Aside/>
      <Chat/>
    </div>
  </StrictMode>,
)
