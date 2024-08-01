import React from 'react'
import '../user/login.css'
const Login = () => {
  
  return (
    <div className='login'>
      <table>
        <tbody>
          <tr>
            <td>아이디</td>
            <td><input type='text' name='memId' /></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type='password' name='memPw' /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Login