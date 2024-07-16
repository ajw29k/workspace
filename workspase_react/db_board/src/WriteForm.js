import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WriteForm = () => {

  function aaa(){
    axios
    .post(`/writerForm`,setWrite)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
  }


  const [write ,setWrite] = useState({
    boardTitle : '', 
    boardContent : '', 
    boardWriter : ''})

  function chang(e){
    setWrite({
      ...write,
      [e.target.name] : e.target.value
    })
  }
  const navigate = useNavigate();
  return(
    <>
    <table>
      
      <tbody>
        <tr>
          <td>제목</td>
          <td><input type="text" name="boardTitle" onChange={(e) => {
            chang(e)
          }}></input></td>
        </tr>
        <tr>
          <td>작성자</td>
          <td><input type="text" name="boardWriter" onChange={(e) => {
            chang(e)
          }}></input></td>
        </tr>
        <tr>
          <td>내용</td>
          <td><textarea name="boardContent" onChange={(e) => {
            chang(e)
          }}></textarea></td>
        </tr>
      </tbody>

    </table>
    <button onClick={() => {
      navigate(-1)
    }}>뒤로가기
    </button>
    <button onClick={() => {
      aaa();
      //setWrite()
      navigate(-1)
    }}>글등록
    </button>
    </>
  )
}

export default WriteForm;