import React from 'react'
import axiosTest from '../components/axiosTest'
function Testing() {
  return (
    <div>
        Testing
        {axiosTest("http://localhost:5287/api/StorePostItems")}
    </div>
  )
}

export default Testing