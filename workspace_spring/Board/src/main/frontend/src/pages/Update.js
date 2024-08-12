import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as boardApi from '../apis/boardApi'

const Update = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState({createDate :'',
    memId : '',
    title : '',
    content:''
  })
  const {boardNum} = useParams()

  //상세 조회
  useEffect(() => {
    boardApi.getBoardDetail(boardNum)
    .then((res) => {
      setPost(res.data)
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  //수정 버튼
  function goUpdate(){
    boardApi.updateBoard(post,boardNum)
    .then((res) => {
      alert('수정 완료되었습니다.')
      console.log(post)
      navigate(`/detail/${boardNum}`)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  //변환 데이터
  function rerere(e){
    setPost({
      ...post,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>작성일</td>
            <td>{post.createDate}</td>
            <td>작성자</td>
            <td>{post.memId}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td><input type='text' name='title' value={post.title} onChange={(e) => {rerere(e)}}/></td>
          </tr>
          <tr>
            <td>내용</td>
            <td><input type='text' value={post.content} name='content' onChange={(e) => {rerere(e)}}/></td>
          </tr>
        </tbody>
      </table>
      <button type='button' className='btn' onClick={() => {goUpdate()}}>수정</button>
      <button type='btuuon' className='btn' onClick={() => {navigate(-1)}}>뒤로가기</button>
    </div>
  )

/*

// import * as BoardApi from '../apis/BoardApi'

//게시글 상세정보를 저장할 state 변수
const [boardDetail, setboardDetail] = useState({})
//수정 쿼리 실행 시 빈 값을 채워줄 데이터
const [updateData, setUpdateData] = useState({
  boardNum : 0,
  title : '',
  content : ''
});

//게시글 상세 정보조회
useEffect(() => {
  BoardApi.getBoardDetail(boardNum)
  .then((res) => {
    setboardDetail(res.data)
  })
  .catch((error) => {errror})

})

//게시글 수정 쿼리 실행
funcion getUpdate(){
  setUpdateData({
    ...updateData,
    [e.target.name] : e.target.value
  })
}
  <>
    <div>제목</div>
    <div><input type='text' name='title' value={updateData.title} onChange={(e) => {rerere(e)}}/></div>
            
    <div>내용</div>
    <div><input type='text' value={updateData.content} name='content' onChange={(e) => {rerere(e)}}/></div>
            
          
        
    <button type='button' onClick={() => {goUpdate()}}>수정</button>
  </>




*/







}

export default Update