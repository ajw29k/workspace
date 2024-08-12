import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStuList } from "./apis";

const StuInfo = () => {
  const [score, setScore] = useState([])
  const navigate = useNavigate();
  
  useEffect(() => {
    getStuList()
    .then((res) => {
      setScore(res.data)
    })
    .catch((error) => {
      console.log(error)
    })

  },[])
  return(
    <>
    <table>
      <tbody>
      <tr>
            <td>No</td>
            <td>학생명</td>
            <td>입력</td>
          </tr>
          {
            score.map((stu,i) => {
              return(
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{stu.stuName} </td>
                    
                  <td>
                    <button type="button" onClick={() => {
                      navigate(`/stuScore/${stu.stuNum}`)
                    }}>입력</button>
                  </td>
                </tr>
              )
            })
          }
      </tbody>
    </table>
    </>
  )
}

export default StuInfo;