import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <div>관리자 전용페이지???</div>
      <Outlet />
    </div>
  )
}

export default AdminLayout