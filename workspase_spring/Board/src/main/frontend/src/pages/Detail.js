import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Detail = ({loginInfo}) => {
 
  const navigate =useNavigate();
const {boardNum} = useParams();
const [use, setUse] = useState([])
//상세정보
// useEffect(()=>{
//   axios
//   .get(`/board/detail/${boardNum}`)
//   .then((res)=>{
//     setUse(res.data)
//     console.log(res.data)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// },[])

//댓글
const [repl, setRepl] = useState([])
// useEffect(()=>{
//   axios
//   .get(`/reply/list/${boardNum}`)
//   .then((res) => {
//     setRepl(res.data)

//   })
//   .catch((error) => {console.log(error)})
// },[]) 

//db에서 데이터 조회 여러개 동시에 실행하기
useEffect(() => {
  axios.all([axios.get(`/board/detail/${boardNum}`)
            ,axios.get(`/reply/list/${boardNum}`)])
  .then(axios.spread((res1, res2) => {
    console.log(res1.data);
    setUse(res1.data)
    console.log(res2.data);
    setRepl(res2.data)
  }))
  .catch((error) => {
    console.log(error)
  })
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
const [regReply, setRegReply] =useState({
  replyContent : '',
  memId : loginInfo.memId,
  boardNum : boardNum
  
})

function replyChange(e){
  setRegReply({
    ...regReply,
    [e.target.name] : e.target.value
  })
  console.log(regReply)
}
function replyInsert(){
  axios.post('/reply/insert', regReply)
  .then((res) => {
    console.log(res.data)
    window.location.reload(); // 페이지를 새로고침
  })
  .catch((error) => {
    console.log(error)
  })
}
useEffect(() => {
  const storedLoginInfo = sessionStorage.getItem('loginInfo');
  if (storedLoginInfo) {
    const loginInfo = JSON.parse(storedLoginInfo);
    setRegReply(prevState => ({
      ...prevState,
      memId: loginInfo.memId
    }));
  }
}, []);

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
         loginInfo.memRole == "ADMIN" || loginInfo.memId == use.memId ?
        <>
          <button type='button' onClick={() => {
            navigate(`/update/${boardNum}`)
          }}>수정</button>
          <button type='button' onClick={() => {
            godelete();
          }}>삭제</button>
        </>
        :
        <></>
      }
      </div>

      {loginInfo.memId == null ?
      <></>
      :
      <div>
        <input type='text' name='replyContent' onChange={(e) => {
          replyChange(e)
        }} />
        <button type='button' onClick={() =>{
          replyInsert()
         }}>등록</button>
      </div>
      }



      <div>
        {repl.map((re , i) =>{
          return(
          <div key={repl.length - i}>
          <div>{re.replyDate}
            {loginInfo.memId == re.memId}
          </div>
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