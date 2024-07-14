import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Pagination } from 'react-bootstrap'
import Kakaomap from '../Kakaomap/Kakaomap'

function RegionDataComponent() {
  const [regionData, setRegionData] = useState([])
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        const response = await axios.get('http://localhost/api/regiondata')
        setRegionData(response.data)
      } catch (error) {
        setError(error)
      }
    }

    fetchRegionData()
  }, [])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = regionData.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber)

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!regionData.length) {
    return <div>Loading...</div>
  } else {
    const totalPages = Math.ceil(regionData.length / itemsPerPage)

    return (
      <div>
        <Table striped bordered hover style={{ paddingTop: '20px' }}>
          <thead>
            <tr>
              <th>도</th>
              <th>시</th>
              <th>개수</th>
              <th>무게</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((data) => (
              <tr key={data.id}>
                <td>{data.province}</td>
                <td>{data.city}</td>
                <td>{data.count}</td>
                <td>{data.weight}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center">
          <Pagination>
            {[...Array(totalPages).keys()].map((number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
        <Kakaomap locations={regionData} />
      </div>
    )
  }
}

export default RegionDataComponent
