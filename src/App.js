import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import BusanPage from './pages/BusanPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/busan" element={<BusanPage />} />
      </Routes>
    </Router>
  )
}

export default App
