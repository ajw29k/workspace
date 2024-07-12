import { useState } from "react";
import { useNavigate } from "react-router-dom";

let Writeform = ({list, setBoardList}) =>{
// 글쓰기

console.log('\n')
console.log(list)

  const navigate =useNavigate()
  const [use, setUse] = useState({
    boardNum : 0,
    title : '',
    content : '',
    writer : '',
    createDate : ''
  })

  function change(e){
    setUse({
      ...use,
      [e.target.name] : e.target.value
    })
    console.log(e.target.value)
  }
  function add(e){
    setUse({...use, add})
  }
  return(
    <>
      <table>
        <colgroup>
        <col width={'30%'} />
        <col width={'*'} />
        </colgroup>
        
        <tbody>
          <tr>
            <td>글번호</td>
            <td>
              <input type="text" key={list.boardNum} name="boardNum" onChange={(e) => {
                
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td>제목</td>
            <td><input type="text" name="title" onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td>작성자</td>
            <td><input type="text" name="writer" onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td>작성일</td>
            <td><input type="date" name="createDate" onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
          <tr>
            <td>내용</td>
            <td><textarea name="content" onChange={(e) => {
              change(e)
            }}/></td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={() => {
        navigate(-1)
      }}>뒤로가기</button>
      <button type="button" onClick={(e ) => {
        setBoardList([...list, use])

        navigate(-1)
      }}>저장하기
      
      </button>
      <br></br>
      
    </>
  )

}

export default Writeform;