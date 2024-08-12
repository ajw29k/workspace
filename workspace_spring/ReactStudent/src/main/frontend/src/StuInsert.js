import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StuInsert = () => {
  const navigate = useNavigate();
  
  const [addData,setAddData] = useState({
    stuName : ''
    ,stuAge : ''
    ,stuTell : ''
    ,stuAddr : ''
  });

  function add(){
    const nameInputTag = document.querySelector('input[name="stuName"]')
    if(nameInputTag.value == ''){
      alert('이름은 필수 입력입니다.')
      nameInputTag.focus();
      return
    }


    axios
    .post('/stuInsert' , addData)
    .then((res) => {
      console.log(res.data)
      navigate('/')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function change(e){
    setAddData({
      ...addData,
      [e.target.name] : e.target.value
    })
  }


  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>이름</td>
            <td><input type="text" name="stuName" onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td>나이</td>
            <td><input type="text" name="stuAge" onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td>연락처</td>
            <td><input type="text" name="stuTell" onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td>주소</td>
            <td><input type="text" name="stuAddr" onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={(e) => {
        console.log()
        add();
      }}>글쓰기</button>
    </div>
  )
}

export default StuInsert;