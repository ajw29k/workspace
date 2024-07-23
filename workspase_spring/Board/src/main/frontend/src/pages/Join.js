import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './join.css';
import * as memberApi from '../apis/memberApi';

const Join = () => {
  //버튼 활성화 여부 state 변수
  const [isDisabled, setIsDisabled] =useState(true)
  const navigate = useNavigate();

  //회원가입 시 가져가야 하는 데이터를 저장할 state 변수
  const [joinData ,setJoinData] = useState({
    memId : '',
    memPw : '',
    consfirmPw : '',
    memName : '',
    gender : 'male'
  });

  function changeJoinData(e){
    //아이디 input 태그의 값이 변경되면 회원가입 버튼을 비활성화
    if(e.target.name == 'memId'){
      setIsDisabled(true)
    }
    
    setJoinData({
      ...joinData,
      [e.target.name] : e.target.value
    })
  }
  //아이디 중복 확인 함수
  function checkId(e){
    if(joinData.memId ==''){
      alert('ID를 입력하세요')
      return;
    }
    //아이디 값을 가지고 자바로 가서 중복 확인 쿼리를 실행
    memberApi.checkId(joinData.memId)
    .then((res) => {
      const restul =res.data;
      //아이디 4~8
      if(joinData.memId.length < 4 || joinData.memId.length > 8){
        alert('아이디를 4~8자 넣으세요')
        return;
      }

      alert(restul ? 'ID 중복입니다.' : '사용가능')

      //사용 가능한 id면 버튼 활성화
      if(!restul){
        setIsDisabled(false)
      }
      
    })
    .catch((error) => {
      alert('중복확인오류');
      console.log(error);
    })
  }

  //회원가입 버튼 클릭시 실행
  function join(e){
    //validation 처리 (유효성 검사)
    if(joinData.memPw != joinData.consfirmPw){
      alert('비밀번호가 다릅니다. 다시 입력해주세요.')
      return;
    }
    
    
    
    //회원가입
    memberApi.join(joinData)
    .then((res) =>{
      console.log(res)
      alert('회원가입이 되었습니다.')
      
      
      navigate('/login') 
      
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <div className='join-div'>
      
      <h1>자유게시판</h1>
      <div>아이디</div>
      <div><input className='inp1' type='text' name='memId' onChange={(e) => {
        changeJoinData(e)
      }}/> <button className= 'btn' type='button' onClick={(e) => {
        checkId(e)
       
      }}>중복확인</button></div>
      <div>비밀번호</div>
      <div><input className='inp' type='password' name='memPw' onChange={(e) => {
        changeJoinData(e)
      }}/></div>
      <div>비밀번호 확인</div>
        <div>
          <input className='inp' type='password' name='consfirmPw' onChange={(e) => {
            changeJoinData(e)
          }}/>
        </div>
      <div>이름</div>
      <div><input className='inp' type='text' name='memName' onChange={(e) => {
        changeJoinData(e)
      }}/></div>
      <div>성별 <input type='radio' name='gender'  value={"male"} 
      // onClick={(e) => {changeJoinData(e)}}
      checked //={joinData.gender =='male'}
      onChange={(e) => {alert('ㅂㅂ')
        changeJoinData(e)}}
      /> 
      남 <input type='radio' name='gender'  value={"fmale"} 
      // onClick={(e) =>{changeJoinData(e)}} 
          onChange={(e) => {alert('??')
          changeJoinData(e)           }}
          // checked={joinData.gender=='fmale'}
      /> 여</div>
      <button className='btn' type='button' disabled={isDisabled} onClick={(e) => {
        join();
      }}>회원가입</button>

    </div>
  )
}

export default Join