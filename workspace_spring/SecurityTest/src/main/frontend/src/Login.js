import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  })

  const changeLoginData = (e) => {
    setLoginData({...loginData,[e.target.name]: e.target.value})
  }

  const loginButton = () => {
    axios.post('/membe/login',loginData)
    .then((res) => {
      console.log('로그인 성공')
      console.log(res)
    })
    .catch((error) => {console.log(error)})
  }

  //아이디와 비번 input 태그의 name 속성은 반드시
  //자바의 LoginFilter 클래스 생성자 안에서 설정한 파라메터 이름으로 지정!
  return (
    <div>
      <div>
        아이디 : <input type='text' name='memId' onChange={(e) => {changeLoginData(e)}}/>
      </div>
      <div>
        비번 : <input type='password' name='memPw' onChange={(e) => {changeLoginData(e)}}/>
      </div>
      <div>
      <button type='button' onClick={() => {loginButton()}}>로그인</button>
      </div>
    </div>
  )
}

export default Login