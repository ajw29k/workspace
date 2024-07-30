import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as boardApi from '../apis/boardApi';

const Board = ({loginInfo}) => {
  //조회된 게시글 목록을 저장할 변수
  const [list, setList] = useState([]);
  
  const navigate = useNavigate();
  //검색 조건을 저장할 변수,
  const [searchDatam, setSearchData] = useState({
    searchType : 'TITLE',
    searchValue : ''
  })

  //게시글 목록 조회
  useEffect(() => {
    boardApi.getBoardList(searchDatam)
    .then((res) => {
      console.log(res.data)
      setList(res.data)
    })
    .catch((e) => {
      console.log(e)
    })
  },[])
  
  //검색 버튼 클릭 시 실행 함수
  function searchBoard(){
    boardApi.getBoardList(searchDatam)
    .then((res) => {
      console.log(res.data)
      setList(res.data)
    }).catch((e) => {
      console.log(e)
    })
  }
  function search(e){
    setSearchData({
      ...searchDatam,
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <div className='main'>
      <h1 onClick={() => {window.location.reload()  }}>자유게시판</h1>
      <div className='option'>
        <select name='searchType' onChange={(e) => {search(e)}}>
          <option value={'TITLE'}>제목</option>
          <option value={'MEM_ID'}>작성자</option>
        </select>
        <input type='text' name='searchValue' onChange={(e) => {
          search(e)
        }}/>
        <button type='butteon' onClick={() => {
          searchBoard()
        }}>검색</button>
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
          {
          list.map((board , i) => {
            return(
              <tr key={i}>
                <td>{list.length-i}</td>
                <td><span onClick={() => {
                  navigate(`/detail/${board.boardNum}`)
                }}>{board.title}</span></td>
                <td>{board.memId}</td>
                <td>{board.createDate}</td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
      {
        loginInfo.memId == null ? 
        <></>
        : 
        <button id='cen' className='btn' type='button' onClick={() => {
          navigate('/write')
        }}> 글쓰기</button>
      }
      
    </div>
  )
}

export default Board