import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../pages/Login.css'
import * as memberApi from '../apis/memberApi'

const Login = () => {
  const navigate =useNavigate();
  const [loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  })

  function changeLoginData(e)
{
  setLoginData({
    ...loginData,
    [e.target.name] : e.target.value
  })
}

function login(){
  
  memberApi.login(loginData)
  .then((res) => {
    //조회결과에 따라 로그인 실행
    
  })
  .catch((error) => {
    console.log(error)
  })
}

  return (
    <div className='container'>
      <h1>자유게시판</h1>
      <div>
        <div>아이디</div>
        <div><input type='text' placeholder='input ID' name='memId' onChange={(e) => {
          changeLoginData(e)
        }}/></div>
        <div>비밀번호</div>
        <div><input type='password' placeholder='input PW' name='memPw' onChange={(e) => {
          changeLoginData(e)
        }}/></div>
        <div>
          <button className='btn' type='button' onClick={() => {
            login();
            // navigate('/')
          }}>로그인</button>
          <button className='btn' type='button' onClick={() => {
            navigate('/')
          }}>목록가기</button>
        </div>
      </div>
    </div>
  )
}

export default Login