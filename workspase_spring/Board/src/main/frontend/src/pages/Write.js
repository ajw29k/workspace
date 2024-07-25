import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Write = ({loginInfo}) => {
  //빈값
  const [list, setList] = useState({
    title : '',
    content : '',
    memId : loginInfo.memId
  })
  const navigate =useNavigate();

  //input 텍스트 값이 바뀔때 list에 값을 저장
  function insertWrite(e){
    setList({
      ...list,
      [e.target.name] : e.target.value
    })
  }
  useEffect(() => {
    
  })

  //글등록 버튼 누르면 함수 실행
  function insert(){
  axios.post('/board/write',list)
    .then((res) => {
      console.log(res)
        navigate('/')

    })
    .catch((e) => {
      console.log(e)
      
    })
  }
  return (
    <div>
      <table>
          <colgroup>
          <col width='20%'/>
          <col width='*'/>
          </colgroup>
        <tbody>
          <tr>
            <td>제목</td>
            <td><input type='text' name='title' onChange={(e) => {
              insertWrite(e)
            }}/></td>
          </tr>
          <tr>
            <td>내용</td>
            <td><textarea name='content' onChange={(e) => {
              insertWrite(e)
            }}></textarea></td>
          </tr>
        </tbody>
      </table>
      <button className='btn' type='button' onClick={() => {
        insert();
console.log('')
console.log(list)
      }}>글등록</button>
    </div>
  )
}

export default Write