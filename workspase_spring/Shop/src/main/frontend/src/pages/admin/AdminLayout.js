import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../admin/AdminLayout.css'
const AdminLayout = () => {
  const [id,setId] = useState(null)
  const handleClick = (id,path) => {
    setId(id)
    navigate(path)
  }

  const navigate = useNavigate()
  return (
    <div>
      <div className='admin01'>
        <ul className='ulflax'>
          <li className={`btnbb ${id === 'regitem' ? 'selected' : ''}`}
            onClick={() => handleClick('regitem', '/admin/regitem')}>상품 관리</li>
          <li
            className={`btnbb ${id === 'stock' ? 'selected' : ''}`}
            onClick={() => handleClick('stock', '/admin/stock')}
          >구매 관리</li>
          <li
            className={`btnbb ${id === 'sales' ? 'selected' : ''}`}
            onClick={() => handleClick('sales', '/admin/sales')}
          >유저 관리</li>
          <li
            className={`btnbb ${id === 'revenue' ? 'selected' : ''}`}
            onClick={() => handleClick('revenue', '/admin/revenue')}
          >매출 관리</li>
        </ul>
        
      </div>
      <div className='aaa'>
          <ul  >
            <li onClick={() => {
              navigate('/admin/regitem')
            }}>상품관리</li>
          </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout