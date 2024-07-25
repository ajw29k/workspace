import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Detail = ({loginInfo}) => {
  const navigate =useNavigate();
const {boardNum} = useParams();
const [use, setUse] = useState([])
//상세정보
useEffect(()=>{
  axios
  .get(`/board/detail/${boardNum}`)
  .then((res)=>{
    setUse(res.data)
    console.log(res.data)
  })
  .catch((error)=>{
    console.log(error)
  })
},[])

//댓글
const [repl, setRepl] = useState([])
useEffect(()=>{
  axios
  .get(`/reply/list/${boardNum}`)
  .then((res) => {
    setRepl(res.data)

  })
  .catch((error) => {console.log(error)})
},[]) 

function godelete(){
  axios.get(`/board/delete/${boardNum}`)
  .then((res) => {
    console.log(res.data)
    navigate('/')
  })
  .catch((error) =>{
    console.log(error)
  })
  
}


  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>작성일</td>
            <td>{use.createDate}</td>
            <td>작성자</td>
            <td>{use.memId}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={3}>{use.title}</td>
            
          </tr>
          <tr>
            <td>작성일</td>
            <td colSpan={3}>{use.content}</td>
            
          </tr>
        </tbody>
      </table>


      <div>
        <button type='button' onClick={() =>{navigate('/')}}>목록가기</button>
        
        {
        loginInfo.memId == null ? 
        <></>
        : 
        <>
          <button type='button' onClick={() => {
            navigate(`/update/${boardNum}`)
          }}>수정</button>
          <button type='button' onClick={() => {
            godelete();
          }}>삭제</button>
        </>
      }
        


      </div>




      <div>
        {repl.map((re , i) =>{
          return(
          <div key={i}>
          <div>{re.replyDate}</div>
            <div>{re.memId}</div>
            <div>{re.replyContent}</div>
          </div>
          )
        
        })}
      </div>
   </div>

  )
}

export default Detail

/* 
<div>
  글번호 : <br />
  제목 : <br />
  작성자 : <br />
  작성일 : <br />
  내용 : <br />
</div>
<div>
  
</div>
<div>

</div>
*/