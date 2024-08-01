import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
    <div>유저 전용 페이지 입니다.</div>
    <Outlet />
    </>

  )
}

export default UserLayout