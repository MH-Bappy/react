import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContexProvaider from './component/contex/Storecontex.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContexProvaider>
      <App />
  </StoreContexProvaider>
  </BrowserRouter>,
)
