import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../components/layouts/Navigation/Navigation'
import Kakaomap from '../components/Kakaomap/Kakaomap'

function MainPage() {
  return (
    <div className="MainPage">
      <Navigation />
      <div
        className="container"
        style={{ width: '100%', height: '60vh', paddingTop: '20px' }}
      >
        <Kakaomap />
      </div>
    </div>
  )
}

export default MainPage
