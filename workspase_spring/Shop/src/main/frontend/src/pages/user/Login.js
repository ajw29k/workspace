import React, { useState } from 'react'
import '../user/login.css'
import { login } from '../../apis/memberApi'
import { useNavigate } from 'react-router-dom'
import Modal from '../../common/Modal'
const Login = ({setLogInfo}) => {
  
  
  //모달 실행 시 저장할 변수 
  const [beforeLoginModal, setBeforeLoginModal] =useState(false)
  //true : 창 띄움 , false : 창 안띄움
  //login쿼리가 실행되고 난 후 보여지는 모달창
  const [isShow,setIsShow] = useState(false)

  //로그인 성공 실패 여부를 저장하는 변수
  const [isLoginSuccess, setIsLoginSuccess] = useState(false)
  //로그인 성공시 모달창에 나오는 데이터
  // function loginModal(){
  //   const logInfo =JSON.parse(window.sessionStorage.getItem('logInfo'))
  //   return(

  //     <div>{logInfo.memName}반값습니다</div>
  //   )
  // }
  //로그인 성공시 이동할 페이지
  function onClickModal(){
    const logInfo =JSON.parse(window.sessionStorage.getItem('logInfo'))
    console.log(logInfo);
    logInfo.memRole=='USER'? navigate('/'):navigate('/admin')
  }
  const navigate = useNavigate()
  //아이디 비밀번호 저장할 변수
  const [loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  })
  //아이디와 비번이 바뀔때마다..
  function change(e){
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }
  //로그인 버튼 눌렀을때 실행되는 함수
  function memberlogin(){
    if(loginData.memId == '' || loginData.memPw ==''){
      setBeforeLoginModal(true); //
      return;
    }
    //DB에 저장되있는 회원이랑 정보가 맞는지 확인
    login(loginData)
    .then((res) => {console.log(res.data)
      
      //로그인텍스트에 빈값이 없을때
      if(res.data != ''){
        //세션스토리지에 저장할 변수
        const logInfo = {
        memId : res.data.memId
        ,memName : res.data.memName
        ,memRole : res.data.memRole
      }
      //세션스토리지에 로그인한 데이터 저장(아이디,이름, 유저냐 관리자냐)
      window.sessionStorage.setItem('logInfo',JSON.stringify(logInfo))

      //
      setLogInfo(logInfo)
      //로그인성공시 모달 실행
      setIsLoginSuccess(true)

    }
    else{
      // alert('데이터 확인!')
      setIsLoginSuccess(false)
      
    }
    setIsShow(true)
    })
    
    .catch((error) => {console.log(error)})
  }

  //login쿼리 실행
  function drawModalContent(){
    return(
      <>
        {    
          isLoginSuccess
          ?
          <div>환영합니다</div>
          :
          <div>ID,PW를 확인하세요1111</div>
        }
      </>
    )
  }

  //login 쿼리 실행 후 띄는 모달 안의 확인 버튼 클릭 시 실행되는 내용
  function handleBtn(){
    if(isLoginSuccess){ //로그인 성공 시 확인 버튼 내용
      // 로그인 성공시 상품 목록 페이지로 이동
      const logInfo =JSON.parse(window.sessionStorage.getItem('logInfo'))
      console.log(logInfo);
      logInfo.memRole=='USER'? navigate('/'):navigate('/admin')
    }
    
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
      <div>
        {
          beforeLoginModal
          ? 
          // <Modal content={loginModal} setIsShow = {setIsShow} 
          // clickClosebtn = {onClickModal} />
          <Modal content={() => {
            return(<div>id pw 필수입력</div>)
          }}
                  setIsShow={setBeforeLoginModal}
                  clickClosebtn={() => {}} />
          :
          null
        }
        {
          isShow
          ?
          <Modal 
          content={drawModalContent} 
          setIsShow={setIsShow}
          clickClosebtn = {handleBtn}
          />
          :
          null
        }
      </div>
    </div>
  )
}

export default Login