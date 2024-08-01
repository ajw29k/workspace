import React, { useState } from 'react'
import '../user/join.css'
import axios from 'axios';
import * as memberApi from '../../apis/memberApi';
const Join = () => {
  // const [isDisabled, setIsDisabled] =useState(true)
  //입력
  const [memberData , setMemberData] = useState({
    memId : ''
    ,memPw : ''
    ,memName : ''
    ,memTel : ''
    ,post : ''
    ,memAddr : ''
    ,addrDetail : ''
    ,memEmail : '@naver.com'
    ,pw: ''
  });
  const [email , setEmail] = useState({
    domain : '@naver.com'
    ,local : ''
  })
  //상태 업데이트가 안됨 값을 입력해도 뒤늦게 입력이 되어 
  //회원가입을 하면 값이 하나 빠진상태로 가입이 되어버림
  function email1(e){
    setEmail({
      ...email
      ,[e.target.name] : e.target.value
    })
    const newEmail = `${email.local}${email.domain}`

    setMemberData({...memberData,memEmail : newEmail})
  }
  function change(e){
    // if(e.target.name == 'memId'){
    //   // setIsDisabled(true)
    // }
    setMemberData({
      ...memberData,
      [e.target.name] : e.target.value
    })
  }
  
  function insert(){
    if(memberData.memId == ''){
      alert('아이디를 입력하세요')
      
      return;
    }
    if(memberData.memPw != memberData.pw || memberData.memPw =='' &&memberData.pw ==''){
      alert('비밀번호를 확인하세요')
      return;
    }
    memberApi.join(memberData)
    .then((res) => {console.log(res)})
    .catch((error) => {console.log(error)})
  }

  //아이디 중복 확인
  // function checkId(){
  //   //빈값은 등록 X
  //   if(memberData.memId == ''){
  //     alert('ID를 입력하세요')
  //     return;
  //   }

  //   //아이디를 자바로 들고가기
  //   memberApi.checkId(memberData.memId)
  //   .then()
  //   .catch()
  // }
  return (
    <div className='join'>
      <table className='table'>
        <tbody>
          <tr>
            <td>아이디</td>
            <td><input type='text' name='memId' className='inputId' onChange={(e) => {
              console.log(memberData.memId)
              change(e)
            }}/><button type='button' className='btn'>중복확인</button></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type='password' name='memPw' onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td>비밀번호 확인</td>
            <td><input type='password' name='pw'  onChange={(e) => {change(e)}}/></td>
          </tr>
          <tr>
            <td>이름</td>
            <td><input type='text' name='memName' onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td>연락처</td>
            <td><input type='text' name='memTel' placeholder='숫자만 입력하세요' onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td>우편번호</td>
            <td><input type='text' name='post' placeholder='우편번호' className='post' onChange={(e) => {
              change(e)
            }}/> <button type='button' className='btn'>검 색</button></td>
          </tr>
          <tr>
            <td></td>
            <td><input type='text' name='memAddr' placeholder='주소' onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type='text' name='addrDetail' placeholder='상세주소' 
            onChange={(e) => {change(e) }}/>
            </td>
          </tr>
          <tr>
            {}
            <td>이메일</td>
            <td>
              <input className='se' type='text' name='local' 
              onChange={(e) => {email1(e)}}
              value={email.local}
              />
              <select name='domain' value={email.domain} onChange={(e) => {
              email1(e)
            }}>
                <option value={'@naver.com'}>naver.com</option>
                <option value={'@google.com'}>google.com</option>
              </select>
            </td>

          </tr>
        </tbody>
      </table>
      <div className='button-div'>
        <button className='btn' type='button' onClick={() => {
          insert()
      }}>회원가입</button></div>
    </div>
  )
}

export default Join