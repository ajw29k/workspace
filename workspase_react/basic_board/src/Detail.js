import { useNavigate, useParams } from "react-router-dom";

const Detail = ({list})=>{

const {id} = useParams();
const navigate =useNavigate();


  return(
    <div>
      {
        list.map((list1,i) =>{
        if(id == list1.boardNum){
        
            
            return(
              <>
                <table>
              <tbody>
              <tr>
                <td>글번호</td>
                <td>{list1.boardNum }</td>
                <td>작성자</td>
                <td>{list1.writer}</td>
                <td>작성일</td>
                <td>{list1.createDate}</td>
              </tr>
              <tr>
                <td>제목</td>
                <td colSpan={5}>{list1.title}</td>
              </tr>
              <tr>
                <td>내용</td>
                <td colSpan={5}>{list1.content}</td>
              </tr>
              </tbody>
              </table>
              <button type="button" onClick={() => {
                navigate(-1)
              }}>뒤로가기</button>
              <button type="button" onClick={() => {
                navigate('/delete')
              }}>글삭제</button>
             </>
              
            )
    
        

      
        }})
        }
      
    
    </div>
  )
}

export default Detail;