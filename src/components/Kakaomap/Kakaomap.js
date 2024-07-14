import React, { useEffect } from 'react'

const { kakao } = window

function Kakaomap() {
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(36.2024, 127.4612),
      level: 13,
    }
    const map = new kakao.maps.Map(container, options)

    var zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

    // 사용자의 현재 위치를 가져와 지도 중심 좌표로 설정하는 함수
    const updateCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const locPosition = new kakao.maps.LatLng(lat, lon)

            // 지도 중심을 사용자의 현재 위치로 변경
            map.setCenter(locPosition)
          },
          (err) => {
            console.error('Error occurred while fetching location: ', err)
          },
        )
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    }

    // 지도 초기화 및 사용자 위치 업데이트
    const initKakaoMap = () => {
      updateCurrentLocation()
    }

    // 지도 초기화
    initKakaoMap()
  }, [])

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100%',
      }}
    ></div>
  )
}

export default Kakaomap
