import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const StuScore = () => {
  const navigate = useNavigate()
  const [score, setScore ] = useState([])
  const {stuNum} = useParams();
  console.log(stuNum)
  useEffect(() => {
    axios
    .get(`/student/${stuNum}`)
    .then((res) => {
      console.log(res.data)
      setScore(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])
  // useEffect(() => {
  //   axios
  //   .get(`/student/${stuNum}`)
  //   .then((res) => {
  //     console.log(res.data)
  //     setUse(res.data)
  //   })
  //   .catch(() => {})
  // },[])

  function change(e){
    setScore({
      ...score,
      [e.target.name] : e.target.value
    })
  }
  function goScore(e){
    
    axios
    .post(`/stuInfo/${score.stuName}`,score)
    .then((res) => {
      console.log(res.data)
      alert('수정되었습니다.')
      navigate('/stuInfo')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <div>
        {score.stuName}
        학생의 성적을 입력합니다</div>
      <div>
        국어 <input type='text' name='korScore' value ={score.korScore}onChange={(e) => {
          change(e)
        }}/>
      </div>
      <div>
      영어 <input type='text' name='engScore' value = {score.engScore}onChange={(e) => {
          change(e)
        }}/>
      </div>
      <div>
      수학 <input type='text' name='mathScore' value={score.mathScore} onChange={(e) => {
          change(e)
        }}/>
      </div>
      <button type='button' onClick={(e) => {
        goScore(e)
        console.log(e.stuNum)
      }} > 점수등록</button>
    </div>
  )
}
