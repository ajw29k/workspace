import './reset.css'
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
import Join from './pages/user/Join';
import Login from './pages/user/Login';
import { useEffect, useState } from 'react';
import { login } from './apis/memberApi';
import Novel1 from './pages/user/Novel1';


function App() {
  const navigate = useNavigate();
  const [logInfo, setLogInfo] = useState({})
  console.log(logInfo)
  useEffect(() => {
    const logInfoString = window.sessionStorage.getItem('logInfo')
    if(logInfoString != null){
      const logData = JSON.parse(logInfoString)
      setLogInfo(logData)
    }
  },[])
  function remove(){
    window.sessionStorage.removeItem('logInfo')
    setLogInfo({})
  }
  return (
    <div className="container">
      <div className='login-div'>
        <div>
          {logInfo.memId !=null 
          ?
           <>
          <div className='c'>{logInfo.memName}님 반갑습니다.<button type='button' className='btn2' onClick={() => {remove()}}>로그아웃</button>
          </div>
          <div>
            
          </div></>:<ul className='header-menu'>
            <li>
              <span onClick={() => {navigate('/login')}}>Login</span>
            </li>
            <li>
              <span onClick={() => {navigate('/join')}}>Join</span>
            </li>
          </ul>}
          
        </div>
       
      </div>
      <div className='banner'>
          <img className='banner-img' src='http://localhost:8080/images/book_banner.PNG' />
        <div className='title-div'>BOOK SHOP</div>
      </div>
      <div className='layout-div'>
        <Routes>
          <Route path='/join' element ={<Join />}/>
          <Route path='/login' element ={<Login setLogInfo = {setLogInfo}/>}/>
        {/* 일반 유저용 */}
          {logInfo.memRole =='USER'? 
            <Route path='/' element ={<UserLayout />}>
            {/* 상품 목록 화면 */}
              <Route path='novel'element={<Novel1 />}/>
              <Route path='test2'element={<div>2번화면</div>}/>
            </Route>
          : 
            <Route path='/admin' element = {<AdminLayout />} >
              <Route path='test1' element ={ <div>상품등록 페이지</div>}/>
            </Route>
        }
          


        
          

        </Routes>
      </div>
    </div>
  );
}

export default App;
