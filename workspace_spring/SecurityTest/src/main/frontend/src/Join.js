import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Join = () => {
  const navigate = useNavigate();
  const [joinData, setJoinData] = useState({
    memId : '',
    memPw : '',
    memName : ''
  })

  const changeJoinData = (e) => {
    setJoinData({
      ...joinData,[e.target.name] : e.target.value
    })
  }

  const joinButton = () => {
    axios.post('/member/join',joinData)
    .then((res) => {
      console.log('회원가입 성공')
      // navigate('/')
    })
    .catch((error) => {console.log(error)})
  }
  return (
    <div>
      <h1>회원가입 페이지</h1>
      <div>
        아이디 : <input type='text' onChange={(e) => {changeJoinData(e)}}/>
      </div>
      <div>
        비번 : <input type='password' onChange={(e) => {changeJoinData(e)}}/>
      </div>
      <div>
        이름 : <input type='text' onChange={(e) => {changeJoinData(e)}}/>
      </div>
      <div>
      <button type='button' onClick={() => {joinButton()}}>회원가입</button>
      </div>
    </div>
  )
}

export default Join