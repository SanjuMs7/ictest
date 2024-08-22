import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Schedule from "./schedule/schedule.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/schedules" element={<Schedule />}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
