import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../admin/AdminLayout.css'
const AdminLayout = () => {
  //사이드메뉴 정보를 관리하는 state변수
  const [sideMenu, setSideMenu] = useState('itemManage')
  const [arrow, setArrow] = useState(null)
  function arrowa(arrow,navi){
    setArrow(arrow)
    navigate(navi)
  }
  //사이드메뉴를 화면에 그리는 함수
  function drawSideMenu(){
    if(sideMenu == 'itemManage'){
      return(
        <>
        <ul className='side-menu-ul'>
          <li onClick={() => {
            const newArrow = arrow == 'right' ? 'down' : 'right'
            arrowa(newArrow,'/admin/itemManage')
            }}>
            <span >상품관리</span>
            <span>
              {arrow === 'right' ?
                <i className="bi bi-chevron-right arrow"></i>
                :
                <i class="bi bi-chevron-compact-down down"></i>
              }
            </span>
          </li>
          <li onClick={() => {navigate('/admin/regitem')}}>
            <span >상품등록</span>
            <span><i className="bi bi-chevron-right"></i>
            </span>
          </li>
          <li onClick={() => {arrowa('categoryManage','/admin/categoryManage')}}>
            <span>카테고리관리</span>
            <span>
            {
              arrow === 'categoryManage' ? 
              <i className="bi bi-chevron-compact-down down"></i> 
              : 
              <i className="bi bi-chevron-right arrow"></i>
            }

            </span>
          </li>
        </ul>
      </>
      )
    }
    else if(sideMenu == 'saleManage'){
      return(
        <><ul className='side-menu-ul'>
        <li onClick={() => {navigate('/admin/saleHistoryOfMonth')}}>이달의 구매내역<i className="bi bi-chevron-right"></i></li>
        <li>구매정보검색<i className="bi bi-chevron-right"></i></li>
      </ul></>
      )
    }
    //유저관리
    else if(sideMenu == 'userManage'){
      return(
        <>
          <ul className='side-menu-ul'>
            <li onClick={() => {navigate('/admin/SearchUser')}}>유저검색</li>
            <li>유저정보변경</li>
            <li>유저탈퇴유저관리</li>
          </ul>
        </>
      )
    }
    //매출관리
    else if(sideMenu == 'recordManage'){
      return(
        <>
          <ul className='side-menu-ul'>
            <li onClick={() => {navigate('/admin/recordOfMonth')}}>이달의 매출</li>
            <li>월별 매출</li>
            <li>카테고리별 매출</li>
          </ul>
        </>
      )
    }
    
  }

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
            onClick={() => {handleClick('regitem', '/admin/itemManage')
              setSideMenu('itemManage')
            }

            }>상품 관리</li>
          <li
            className={`btnbb ${id === 'stock' ? 'selected' : ''}`}
            onClick={() => {handleClick('stock', '/admin/saleHistoryOfMonth')
              setSideMenu('saleManage')
            }
          }
          >구매 관리</li>
          <li
            className={`btnbb ${id === 'sales' ? 'selected' : ''}`}
            onClick={() =>{ handleClick('sales', '/admin/SearchUser')
              setSideMenu('userManage')
            }}
          >유저 관리</li>
          <li
            className={`btnbb ${id === 'revenue' ? 'selected' : ''}`}
            onClick={() => {handleClick('revenue', '/admin/recordOfMonth')
              setSideMenu('recordManage')
            }}
          >매출 관리</li>
        </ul>
        
      </div>
      <div className='aaa'>
          {
            drawSideMenu()
          }
            
          <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout


{/* <>
        <ul className='side-menu-ul'>
          <li><span>상품관리</span><span><i className="bi bi-chevron-right"></i></span></li>
          <li><span>상품등록</span><span><i className="bi bi-chevron-right"></i></span></li>
          <li><span>카테고리관리</span><span><i className="bi bi-chevron-right"></i></span></li>
        </ul>
      </> */}