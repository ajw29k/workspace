import React, { useEffect, useRef, useState } from 'react'
import '../user/join.css'
import axios from 'axios';
import * as memberApi from '../../apis/memberApi';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import Modal from '../../common/Modal';
const Join = () => {
  
  ///daum 주소 api 팝업창을 띄우기 위한 함수 선언
  const open = useDaumPostcodePopup();
  
  //주소 검생 팝업창이 닫힐 때 실행되는 함수
  function handleComplete(data){
    console.log(data.zonecode)
    console.log(data.roadAddress)
    
    setMemberData({
      ...memberData,
      post : data.zonecode,
      memAddr : data.roadAddress
    })
  }
  //검색 버튼 클릭 시 실행되는 함수
  function handleCilck(){
    open({onComplete : handleComplete})
  }

  //input 태그를 참조하는 변수
  const email_1 = useRef();

  const [isDisabled, setIsDisabled] =useState(true)
  
  //입력
  const [memberData , setMemberData] = useState({
    memId : ''
    ,memPw : ''
    ,memName : ''
    ,memTel : ''
    ,post : ''
    ,memAddr : ''
    ,addrDetail : ''
    ,memEmail : ''
    ,pw: ''
  });
  const [email , setEmail] = useState({
    domain : '@naver.com'
    ,local : ''
  })
  
  const navigate =useNavigate();
  
  function email1(e){
    setEmail({
      ...email
      ,[e.target.name] : e.target.value
    })
    
  }
  useEffect(() => {
    const newEmail = `${email.local}${email.domain}`

    setMemberData({...memberData,memEmail : newEmail})

  },[email])
  function change(e){
    if(e.target.name == 'memId'){
      setIsDisabled(true)
    }

    //setMemberData({
      //     ...memberData,
      //     [e.target.name] : e.target.name != 'memEmail' ?
      //                                        e.target.value : 

      //   })

    //이메일을 변경했으면
    // if(e.target.name == 'memEmail'){
    //    setMemberData({
    //     ...memberData,
    //     [e.target.name] : email_1.current.value +email_2.current.value
    //   })
    
    // else{
    //  setMemberData({
    //    ...memberData,
    //    [e.target.name] : e.target.value
    //  })//
    // }
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
    .then((res) => {console.log(res)
      setIsShow(true)
      console.log(isShow)
      
    } )
    .catch((error) => {console.log(error)})
  }

  //아이디 중복 확인
  function checkId(){
    //빈값은 등록 X
    if(memberData.memId == ''){
      alert('ID를 입력하세요')
      return;
    }

    //아이디를 자바로 들고가기
    memberApi.checkId(memberData.memId)
    .then((res)=>{
      const r = (res.data)
      console.log(r)
      if(r){
        alert('아이디가 있습니다 다시 입력하세요')
        return;
      }
      if(!r){
        alert('사용가능한 아이디입니다')
        setIsDisabled(false)
      }

    })
    .catch((error)=>{console.log(error)})
  }

  //모달창 랜더링 여부
  const [isShow, setIsShow] = useState(false);
  
  //모달창 안의 내용을 생성하는 함수
  function setModalContent(){
    return(
      <div>회원가입을 축하합니다</div>
    );
  }
  return (
    
    <div className='join'>
      <img className='banner-img' src='http://localhost:8080/images/MELLON.PNG' />
        <table className='table'>
          <tbody>
            <tr>
              <td>아이디</td>
              <td><input type='text' name='memId' className='inputId' onChange={(e) => {
                console.log(memberData.memId)
                change(e)
              }}/><button type='button' className='btn' onClick={() => {
                checkId()
              }}>중복확인</button></td>
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
              <td><input type='text' readOnly name='post' placeholder='우편번호' value={memberData.post} className='post' onClick={(e) => {handleCilck()}} onChange={(e) => {
                change(e)
              }}/> <button type='button' className='btn' onClick={(e) => {handleCilck()}}>검 색</button></td>
            </tr>
            <tr>
              <td></td>
              <td><input type='text' name='memAddr' placeholder='주소' onClick={(e) => {handleCilck()}} value={memberData.memAddr} readOnly onChange={(e) => {
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
                {/* name값을 nameEmail로 했을때 ref입력 */}
                <input className='se' type='text' name='local' 
                // ref={email_1}
                onChange={(e) => {email1(e)}}
                
                />
                <select name='domain' onChange={(e) => {
                  // ref={email_2}
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
          <button className='btn' type='button' disabled={isDisabled} onClick={() => {
            insert()
            // memberData.memId =  ? setModalContent() : <></>
            
          }} >회원가입</button></div>
      {/* 회원가입 성공 시 열리는 모달 창 */}
      {
        isShow ? <Modal content={setModalContent} setIsShow = {setIsShow}/> : null
      }    
    </div>
  )
}


export default Join