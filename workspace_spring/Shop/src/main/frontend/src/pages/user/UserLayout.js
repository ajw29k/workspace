import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../user/UserLayout.css'
const UserLayout = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='layout'>
      <ul className='ul'>
        <li><span onClick={() => {navigate('/')}}>전체상품</span></li>
        <li><span >인터넷/IT</span></li>
        <li><span onClick={() => {
          navigate('novel')
        }} >소설</span></li>
        <li><span >자기계발</span></li>
      </ul>
      
    </div>
    <Outlet />
    </>

  )
}

export default UserLayout