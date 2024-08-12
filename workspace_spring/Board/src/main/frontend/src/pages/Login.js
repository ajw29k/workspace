import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../pages/Login.css'
import * as memberApi from '../apis/memberApi'

//리액트는 화면을 새로고침 할 때마다 데이터가 초기화 되기 때문에
//로그인을 했다는 정보를 일반적인 방식으로 저장해도 새로고침하면 로그인이 풀려버린다.

//새로고침 해도 정보가 사라지지 않는 저장 공간을 두 개 제공
//이 두개의 저장 공간은 client pc에 존재
//문자열 데이터만 저장 가능

// localStorage : 여기에 저장되는 데이터는 직접 삭제하지 않는한 반영구정으로 보전.
// 인터넷 끊겨도, 컴퓨터를 재부팅해도 데이터가 살아있음.
// 브라우저에 다른 탭끼리도 데이터가 공유

// sessionStorage : 
// 여기에 저장되는 데이터는 인터넷(브라우저)을 종료하면 자동으로 사라짐
// 브라우저의 탭이 달라도 데이터 공유가 안 됨.

//사용법(sessionStorage==loaclStorage)
//데이터 저장 : sessionStorage.setItem(key, value);
//데이터 읽기 : sessionStorage.getItem(kry);
//데이터 삭제 : sessionStorage.removeItem(key)
//전체 데이터 삭제 : sessionStorage.clear();
const Login = ({setLoginInfo}) => {

  //sessionStorage에 데이터 입력
  // window.sessionStorage.setItem('name','kim');
  // window.sessionStorage.setItem('age',20);
  // const m ={
  //   stuNum : 1,
  //   stuName : 'kim',
  //   score : 80
  // };

  //객체 -> json으로 변환(객체를 문자로 변환)
  // JSON.stringify();
  // json ->객체
  // JSON.parse();
  // window.sessionStorage.setItem('member', JSON.stringify(m) );

  // const data = window.sessionStorage.getItem('member');
  // console.log(data)
  
  // const result = JSON.parse(data)
  // console.log(result)

  //객체나 배열을 starage애 저장할 때 json 형태로 저장 할 수 있음.
  //json(javascript object notation) -> 자바스크립트의 객체를 문자화 시킨 것!
  //{name : 'him', age : 20} => "{name : 'him',  age : 20}"
  //모든 언어에서 공통으로 해석할 수 있는 자료형

  //sessionStorage에 데이터 읽기
  console.log(window.sessionStorage.getItem('name'))
  
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
    //조회결과가 있으면 로그인 처리!
    
    //조회결과가 없으면 다시 로그인 할 수 있도록 처리!
    if(res.data != ''){
      alert('로그인 성공')

      //sessionStrorage에 로그인한 사람의 아이디, 이름, 권한을 저장
      
      const loginInfo = {
        memId : res.data.memId,
        memName : res.data.memName,
        memRole : res.data.memRole
      }
      
      window.sessionStorage.setItem('loginInfo' , JSON.stringify(loginInfo));
      
      setLoginInfo(loginInfo)
      
      navigate('/')
    }
    else{
      alert('ID, PW 확인!')
    }
    console.log(res.data)

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