import { useNavigate, useParams } from "react-router-dom";

// 상세보기
const Detail = ({list})=>{

const {id} = useParams();
console.log(id)
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
              <button type="button" onClick={(e) => {
                list.forEach((board, i) => {
                  if(board.boardNum == id){
                    list.splice(i,1)
                  }
                })
                navigate('/')
                //삭제할 글번호
                // arr(어디부터, 몇개 지울꺼)ty
                //게시글 목록
              }}>글삭제</button>
             </>
              
            )
    
        

      
        }})
        }
      
    
    </div>
  )
}

export default Detail;