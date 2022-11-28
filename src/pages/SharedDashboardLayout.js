import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedDashboardLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default SharedDashboardLayout
