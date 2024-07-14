import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import BusanPage from './pages/BusanPage'
import SeoulPage from './pages/SeoulPage'
import GangwonPage from './pages/GangwonPage'
import GyeonggiPage from './pages/GyeonggiPage'
import GyeongnamPage from './pages/GyeongnamPage'
import GyeongbookPage from './pages/GyeongbookPage'
import UlsanPage from './pages/UlsanPage'
import IncheonPage from './pages/IncheonPage'
import JeonnamPage from './pages/JeonnamPage'
import JeonbookPage from './pages/JeonbookPage'
import JejuPage from './pages/JejuPage'
import ChungnamPage from './pages/ChungnamPage'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/busan" element={<BusanPage />} />
        <Route path="/seoul" element={<SeoulPage />} />
        <Route path="/gangwon" element={<GangwonPage />} />
        <Route path="/gyeonggi" element={<GyeonggiPage />} />
        <Route path="/gyeongnam" element={<GyeongnamPage />} />
        <Route path="/gyeongbook" element={<GyeongbookPage />} />
        <Route path="/ulsan" element={<UlsanPage />} />
        <Route path="/incheon" element={<IncheonPage />} />
        <Route path="/jeonnam" element={<JeonnamPage />} />
        <Route path="/jeonbook" element={<JeonbookPage />} />
        <Route path="/jeju" element={<JejuPage />} />
        <Route path="/chungnam" element={<ChungnamPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  )
}
export default App