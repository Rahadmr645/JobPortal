import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import eruda from "eruda"
import { ContextProvider } from './context/storeContext.jsx';
eruda.init();
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>



)
