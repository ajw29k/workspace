import './reset.css';
import './App.css';
import './pages/Board.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Board from './pages/Board';
import Join from './pages/Join';
import Write from './pages/Write';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import Detail from './pages/Detail';
import Update from './pages/Update';

function App() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] =useState({})
  
  useEffect(() => {
    const loginInfoString = window.sessionStorage.getItem('loginInfo')

    if(loginInfoString != null){
      const loginData = JSON.parse(loginInfoString)
      setLoginInfo(loginData);
    }

  },[])
  function remove(){
    //세션에 저장되있던 데이터 삭제
    sessionStorage.removeItem('loginInfo')
    //빈객체로 재랜더링
    setLoginInfo({})
    
  }
  return (
    <div className="container">  
      <div className='header'>
        <div>
          {/* 로그인 안했을때 */}
          {
            loginInfo.memId == null 
            ? 
            <>
              <ul>
                <li><span onClick={() => {navigate('/login')}}>Login</span></li>
                <li><span onClick={() => {navigate('/join')}}>Join</span></li>
              </ul>
            </>
           :
            <>
              <div>
              {/* {bb.memId} */}
              {loginInfo.memName}님 반갑습니다.
              <span id='gg' onClick = {() =>{//세션스토리지에 저장된 로그인 정보를 제거
                window.sessionStorage.removeItem('loginInfo')
                setLoginInfo({})
                alert('로그아웃!')
                // navigate('/')
                // remove();
              }}>Log Out</span>
              </div>
            </>
          }
          {/* 로그인 했을때 */}
         
        </div>
        
      </div>
      <div className='content'>
        <div >
          
        </div>
        <div>
        <Routes>
          {/* 게시글 목록 페이지 */}
          <Route path='/' element = {
            <Board loginInfo ={loginInfo}/>} />
          {/* 회원가입 페이지 */}
          <Route path='/join' element = {<Join />} />
          {/* 로그인 페이지 */}
          <Route path='/login' element = {<Login setLoginInfo = {setLoginInfo}/>} />
          {/* 글쓰기 페이지 */}
          <Route path='/write' element = {<Write loginInfo ={loginInfo}/>} />
          
          <Route path='/detail/:boardNum' element = {<Detail loginInfo ={loginInfo}/>} />
          <Route path='/update/:boardNum' element = {<Update />} />
        </Routes>
        </div>
      </div>

      
    </div>
  );
}



export default App;
