import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState({createDate :'',
    memId : '',
    title : '',
    content:''
  })
  const {boardNum} = useParams()

  useEffect(() => {
    axios.get(`/board/detail/${boardNum}`)
    .then((res) => {
      setPost(res.data)
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  function goUpdate(){
    axios
    .post(`/board/update/${boardNum}` ,post)
    .then((res) => {
      console.log(post.boardNum)
      navigate(`/detail/${boardNum}`)
    })
    .catch((error) => {
      console.log(error)
    })
  }

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
      <button type='button' onClick={() => {goUpdate()}}>수정</button>
      <button type='btuuon' onClick={() => {navigate(-1)}}>뒤로가기</button>
    </div>
  )
}

export default Update