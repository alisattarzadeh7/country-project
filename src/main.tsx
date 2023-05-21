import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Providers from "~/src/Utils/Providers";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Providers>
          <BrowserRouter>
                <App />
          </BrowserRouter>
      </Providers>
  </React.StrictMode>,
)
