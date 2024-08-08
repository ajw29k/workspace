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
import RegItem from './pages/admin/RegItem';
import Stock from './pages/admin/Stock';
import Sales from './pages/admin/Sales';
import Revenue from './pages/user/Revenue';

//새로고침하면 state 변수의 값이 전부 초기화 된다
//재랜더링하면 state 변수의 값은 보존된다
function App() {
  const navigate = useNavigate();
  //로그인 정보를 저장할수 있는 state 변수
  const [logInfo, setLogInfo] = useState({})
  console.log(logInfo)
  //화면 시작시 로그인 정보를 저장
  useEffect(() => {
    //로그인 정보를 담을 변수
    const logInfoString = window.sessionStorage.getItem('logInfo')
    //
    if(logInfoString != null){
      const logData = JSON.parse(logInfoString)
      setLogInfo(logData)
    }
  },[])
  //함수 실행시 로그아웃
  function remove(){
    window.sessionStorage.removeItem('logInfo')
    //로그인 정보 지운후 로그인정보 빈객체로 재랜더링
    navigate('/')
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
           
            <Route path='/' element ={<UserLayout />}>
            {/* 상품 목록 화면 */}
              <Route path='novel'element={<Novel1 />}/>
              <Route path='test2'element={<div>2번화면</div>}/>
            </Route>
            {logInfo.memRole =='USER'||logInfo.memRole == ''?<></>
          : 
          // 관리자용 페이지
            <Route path='/admin' element = {<AdminLayout />} >
              <Route path='test1' element ={ <div>상품등록 페이지</div>}/>
              <Route path='regItem' element ={ <RegItem />}/>
              <Route path='stock' element ={ <Stock />}/>
              <Route path='sales' element ={ <Sales />}/>
              <Route path='revenue' element ={ <Revenue />}/>
            </Route>
        }
          


        
          

        </Routes>
      </div>
    </div>
  );
}

export default App;
