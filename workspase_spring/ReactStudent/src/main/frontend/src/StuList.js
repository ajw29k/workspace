import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StuList = () => {
const [stuData , setStuData] =useState([]);
  useEffect(() => {
  axios
  .get('/stuList')
  .then((res) => {
    console.log(res.data)
    setStuData(res.data)
  })
  .catch((error) => {
    console.log(error)
  })
},[])

const navigate = useNavigate();

  return(
    <>
      <table>
        <thead>
          <tr>
            <td>NO</td>
            <td>학생명</td>
            <td>국어점수</td>
            <td>영어점수</td>
            <td>수학점수</td>
            <td>평균</td>
          </tr>
        </thead>
        <tbody>
          {
            stuData.map((stu,i) => {
              return(
              <tr key={i}>
                <td>{stu.stuNum}</td>
                <td><span onClick={() => {
                  navigate(`/student/${stu.stuNum}`)
                }}>{stu.stuName}</span></td>
                <td>{stu.korScore}</td>
                <td>{stu.engScore}</td>
                <td>{stu.mathScore}</td>
                <td>{(stu.korScore+stu.engScore+stu.mathScore)/3}</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default StuList;