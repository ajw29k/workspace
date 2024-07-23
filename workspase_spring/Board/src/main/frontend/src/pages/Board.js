import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as boardApi from '../apis/boardApi';

const Board = () => {
  //조회된 게시글 목록을 저장할 변수
  const [list, setList] = useState([]);

  
  const navigate = useNavigate();

  //게시글 목록 조회
  useEffect(() => {
    boardApi.getBoardList()
    .then((res) => {
      console.log(res.data)
      setList(res.data)
      console.log(setList)
    })
    .catch((e) => {
      console.log(e)
    })
  },[])

  return (
    <div className='main'>
      <h1>자유게시판</h1>
      <div className='option'>
        <select>
          <option>제목</option>
        </select>
        <input type='text' />
        <button type='butteon'>검색</button>
      </div>
      <table>
        <colgroup>
          <col width='10%'/>
          <col width='*%'/>
          <col width='20%'/>
          <col width='20%'/>
        </colgroup>
        <thead>
          <tr>
            <td>No</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
          </tr>
        </thead>
        <tbody>
          {list.map((board , i) => {
            return(
              <tr>
                <td>{i+1}</td>
                <td>{board.title}</td>
                <td>{board.memId}</td>
                <td>{board.createDate}</td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
      <button className='btn' type='button' onClick={() => {
        navigate('/write')
      }}> 글쓰기</button>
    </div>
  )
}

export default Board