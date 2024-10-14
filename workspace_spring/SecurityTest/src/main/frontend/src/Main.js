import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { securityApi } from './securityAxios';

const Main = () => {
  const navigate = useNavigate();

  //서버로 요청 시 요청 헤더에 토큰 가져가는 코드
  const test = () => {
    axios.get('/getToken',{
      headers : {
        'Authorization' : localStorage.getItem('Authorization')
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {console.log(error)})
  }

  const test1 = () => {
    securityApi.get('/test1')
    .then((res) => {
      console.log('성공')
    })
    .catch((error) => {console.log(error)})
  }
  const test2 = () => {
    securityApi.get('/test2')
    .then((res) => {
      console.log('성공')
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  const test3 = () => {
    // axios.get()....
    securityApi.get('')
  }
  const test4 = () => {
    axios.get('/test4',{
      headers :{
        'Authorization' : localStorage.getItem('Authorization')
      }
    })
    .then((res) => {
      
    })
    .catch((error) => {console.log(error)})
  }
  const test5 = () => {
    axios.get()
    .then((res) => {
      
    })
    .catch((error) => {console.log(error)})
  }
  return (
    <div>
      <h1>Main페이지</h1>
      <h3><span className='aa' onClick={() => {navigate("/loginForm")}}>로그인페이지로 이동</span></h3>
      <h3><span className='aa' onClick={() => {navigate("/joinForm")}}>회원가입페이지로 이동</span></h3>
      <h3><span className='aa' onClick={() => {test()}}>서버에 토큰 가져가기</span></h3>

      <h3><span className='aa' onClick={() => {test1()}}>MainController-test1메서드 : 누구나 접근</span></h3>
      <h3><span className='aa' onClick={() => {test2()}}>MainController-test2메서드 : 인증된 사람만 접근</span></h3>
      <h3><span className='aa' onClick={() => {test3()}}>MainController-test3메서드 : 인증된 일반회원만 접근</span></h3>
      <h3><span className='aa' onClick={() => {test4()}}>MainController-test4메서드 : 인증된 관리자만 접근</span></h3>
      <h3><span className='aa' onClick={() => {test5()}}>MainController-test5메서드 : 인증된 매니저 or 관리자만 접근</span></h3>
      <h3>일반회원페이지로 이동</h3>
    </div>
  )
}

export default Main