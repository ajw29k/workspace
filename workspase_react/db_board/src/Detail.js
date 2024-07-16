import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
const {boardNum} = useParams();
const [board , setboard] =useState([]);
useEffect(() => {
  axios
  .get(`/boardDetail/${boardNum}`)
  .then((res) => {
    console.log(res.data)
    setboard(res.data)
  })
  .catch((error) => {
    alert('오류발생!')
    console.log(error)
  });
},[])

const navigate = useNavigate();
console.log(board)
return(
  <>
    <tbody>
      <tr>
        <td>글번호</td>
        <td>{board.boardNum}</td>
        <td>작성자</td>
        <td>{board.boardWriter}</td>
      </tr>
      <tr>
        <td>제목</td>
        <td colSpan={3}>{board.boardTitle}</td>
      </tr>
      <tr>
        <td>내용</td>
        <td colSpan={3}>{board.boardContent}</td>
      </tr>
    </tbody>
    <button type="button" onClick={() => {
      navigate(-1)
    }}> 뒤로가기</button>
    <button type="button" onClick={() => {
      navigate(`/writeForm/${boardNum}`)
    }}> 수정</button>
    <button type="button" onClick={() => {
      navigate('/')
    }}> 삭제</button>
    
    
    
    

  
  </>
)
}

export default Detail;