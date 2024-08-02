import React, { useState } from 'react'
import '../user/login.css'
import { login } from '../../apis/memberApi'
import { useNavigate } from 'react-router-dom'
const Login = ({setLogInfo}) => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  })
  function change(e){
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }
  function memberlogin(){
    login(loginData)
    .then((res) => {console.log(res.data)
      alert('로그인 되었습니다')
      const logInfo = {
        memId : res.data.memId
        ,memName : res.data.memName
        ,memRole : res.data.memRole
      }
      window.sessionStorage.setItem('logInfo',JSON.stringify(logInfo))
      setLogInfo(logInfo)
      {logInfo.memRole=='USER'? navigate('/'):navigate('/admin')}
      
    })
    .catch((error) => {console.log(error)})
  }

  return (
    <div className='login'>
      <table>
        <tbody>
          <tr>
            <td>아이디</td>
            <td><input type='text' name='memId' onChange={(e) => {change(e)}}/></td>
            <td rowSpan={2} className='c1' ><button type='button' className='btn btn1' onClick={() => {
              memberlogin();
              }}> 로그인</button></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type='password' name='memPw' onChange={(e) => {change(e)}}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Login