import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Student = () => {
  const {stuNum} = useParams();

  const [use,setUse] = useState([]);


  // let result = null;
  // use.forEach((student)=>{
  //   if(student.stuNum == stuNum){
  //     result = student;
  //   }
  // })


  useEffect(() => {
    axios
    .get(`/student/${stuNum}`)
    .then((res) => {
      console.log(res.data)
      setUse(res.data)
    })
    .catch(() => {})
  },[])
  const navigate = useNavigate();

  
  return(
    <>
      <table>
        <thead>
          <tr>
            <td>이름</td>
            <td>{use.stuName}</td>
            <td>나이</td>
            <td>{use.stuAge}</td>
          </tr>
          <tr>
            <td>연락처</td>
            <td>{use.stuTell}</td>
            <td>주소</td>
            <td>{use.stuAddr}</td>
          </tr>
          <tr>
            <td>국어점수</td>
            <td>{use.korScore}</td>
            <td>영어점수</td>
            <td>{use.engScore}</td>
          </tr>
          <tr>
            <td>수학점수</td>
            <td>{use.mathScore}</td>
            <td>평균</td>
            <td>{(use.mathScore+use.korScore+use.engScore)/3}</td>
          </tr>
        </thead>
      </table>
      <button type="button" onClick={() => {
        navigate('/')
      }}> 뒤로가기 </button>
    </>
  )


}

export default Student;

// const [user , setUser] = useState([])
//   function tar(e){
//     setUser({
//       ...user,
      
//     })
//   }