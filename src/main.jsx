import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './pages/Chat.jsx'
import Polls from './pages/Polls.jsx'
import Expenses from './pages/Expenses.jsx'
import Photos from './pages/Photos.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/polls" element={<Polls />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/home" element={<App />} />
    </Routes>
  </BrowserRouter>
)
