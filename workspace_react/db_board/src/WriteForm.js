import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WriteForm = () => {

  function aaa(){
    const title_input = document.querySelector('input[name="boardTitle"]');
    if(title_input.value == ''){
      alert('제목은 필수 입력입니다.')
      title_input.focus();
      return ;
    } 
    if(document.querySelector('input[name="boardWriter"]').value ==''){
      alert('작성자는 필수입력입니다.');
      return ;
    }

    axios
    .post('/writeForm',write)
    .then((res) => {
      console.log(res)
      navigate('/')
      
    })
    .catch((error) => {
      console.log(error)
    })
  }


  const [write ,setWrite] = useState({
    boardTitle : '' ,
    boardContent : '', 
    boardWriter : ''})

  function chang(e){
    setWrite({
      ...write,
      [e.target.name] : e.target.value
    })
  }
  const navigate = useNavigate();

  function insertBoard(){
    //제목이 비었으면?
    //
    
  }

  return(
    <>
      <table>
        <tbody>
          <tr>
            <td>제목</td>
            <td><input type="text" name="boardTitle" onChange={(e) => {
              
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
        console.log(write)
        

        aaa();
      }}>글등록
      </button>
    </>
  )
}

export default WriteForm;