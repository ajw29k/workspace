import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Write = () => {
  const [list, setList] = useState([])
  const navigate =useNavigate();
  useEffect(() => {
    axios.post('/write')
    .then((res) => {
      console.log(res)
      setList(res.data)
    })
    .catch((e) => {
      console.log(e)
      
    })

  })
  function insertWrite(e){
    setList({
      ...list,
      [e.target.name] : e.target.value
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
            }}> </textarea></td>
          </tr>
        </tbody>
      </table>
      <button className='btn' type='button' onClick={() => {
        navigate('/')
      }}>글등록</button>
    </div>
  )
}

export default Write