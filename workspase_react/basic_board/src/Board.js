import { useNavigate } from "react-router-dom";
import Writers from "./Writers";
import './Board.css';

const Board = ({list}) =>{
  const navigate = useNavigate();
  // 목록리스트
  return(
    <>
      <table>
        <colgroup>
        <col width={'15%'} />
        <col width={'50%'} />
        <col width={'15%'} />
        <col width={'*'} />
        </colgroup>
        <thead>
          
          <tr>
            <td>글번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
          </tr>
        </thead>
        <tbody>
        {
          list.map((e,i) =>{
            return(
              <>
                <Writers key={i} boar ={e}/>
              </>
            )
          })
        }
          {/* 
          {
          item_list.map((item, e) => {
            return(
              <Item key={e} item={item} />
              
            )
          })
          }\
         */}
        </tbody>
      </table>
      <div>
        <button type="button" onClick={() => {
          navigate('/writeform')
        }}>글등록</button>
        
      </div>
    </>
  )
}

export default Board;