import React from 'react'


//components

import Sidebar from '../components/Sidebar'
function Dashboard() {
  return (
    <div className='w-screen h-screen flex flex-row'>
      <div className='w-70 bg-gray-200 border-r-2 border-gray-200'>
          <Sidebar />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Dashboard
