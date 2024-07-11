import { useNavigate } from "react-router-dom";

let Writeform = () =>{

  const navigate =useNavigate()
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
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>제목</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>작성자</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>작성일</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>내용</td>
            <td><textarea /></td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={() => {
        navigate(-1)
      }}>뒤로가기</button>
    </>
  )

}

export default Writeform;