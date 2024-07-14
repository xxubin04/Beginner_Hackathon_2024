import React, { useEffect } from 'react'
import axios from 'axios'

const { kakao } = window

function Kakaomap({ locations }) {
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(36.2024, 127.4612),
      level: 13,
    }
    const map = new kakao.maps.Map(container, options)

    const zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

    const updateCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const locPosition = new kakao.maps.LatLng(lat, lon)
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

    const getCoordsByAddress = async (address) => {
      const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `KakaoAK 293fd7189c569ce1cf741a0d29ab0b5e`,
          },
        })
        const { documents } = response.data
        if (documents.length > 0) {
          const { x, y } = documents[0]
          return { lat: y, lng: x }
        }
        return null
      } catch (error) {
        console.error('Error fetching coordinates:', error)
        return null
      }
    }

    const initKakaoMap = async () => {
      updateCurrentLocation()

      for (const location of locations) {
        const coords = await getCoordsByAddress(
          `${location.province} ${location.city}`,
        )
        if (coords) {
          let markerImageURL = '' // 기본 마커 이미지 URL
          if (location.weight > 96.179) {
            markerImageURL =
              'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png' // 무게가 96.179 초과일 때 사용할 이미지 URL
          }
          const markerPosition = new kakao.maps.LatLng(coords.lat, coords.lng)
          const markerImage = markerImageURL
            ? new kakao.maps.MarkerImage(
                markerImageURL,
                new kakao.maps.Size(30, 30),
              )
            : null

          const kakaoMarker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage, // 조건에 따라 다른 이미지 설정
          })
          kakaoMarker.setMap(map)
        }
      }
    }

    initKakaoMap()
  }, [locations])

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
