import React, { useState, useEffect } from 'react'
import axios from 'axios'

function RegionDataComponent() {
  const [regionData, setRegionData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    // API 호출 함수
    const fetchRegionData = async () => {
      try {
        const response = await axios.get('http://localhost/api/regiondata')
        setRegionData(response.data)
      } catch (error) {
        setError(error)
      }
    }

    // API 호출 함수 실행
    fetchRegionData()
  }, []) // 빈 배열을 두 번째 인자로 전달하여 컴포넌트가 마운트될 때 한 번만 호출되도록 설정

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!regionData) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <h2>Region Data</h2>
        <ul>
          {regionData.map((data) => (
            <li key={data.id}>
              {data.province} - {data.city}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RegionDataComponent
