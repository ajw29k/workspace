import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const BoardList = () => {
  //게시글 목록을 저장할 state변수
  const [boardList, getboardList] = useState([]);

  //게시글 목록 데이터 받기
  //useEffect 안의 내용은 마지막에 실행
  //useEffect가 로딩이 느리기 때문에 화면이 먼저 나오고 난뒤에 데이터를 받아온다
    useEffect(() => {
      axios
      .get('/boardList')
      .then((res)=>{
        getboardList(res.data)
      })
      .catch((error)=>{
        alert('오류발생!!\n개발자 모드로 콘솔 확인하세요!!!!')
        console.log(error)
      })},[])
  
    // 서버에서 데이터 받기
    
    // 데이터를 가져올 url을 작성
     
    // 데이터 조회 후 실행 할 내용, 
    // res : 통신 결과 모든 정보가 담긴객체
    // res.data : 조회한 데이터
    
    // 오류 발생 시 실행 할 내용(오류 발생 시에만 실행!!)
    //error : 오류에 대한 모든 정보가 담긴 객체

    const navigate = useNavigate();
    return(
      <>
        <table>
          <thead>
            <tr>
              <td>글번호</td>
              <td>제  목</td>
              <td>작성자</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {boardList.map((board,i)=>{
              return(
                <tr key={i}>
                  <td>{board.boardNum}</td>
                  <td><span onClick={(e) => {
                    navigate(`/detail/${board.boardNum}`);
                  }}>{board.boardTitle}</span></td>
                  <td>{board.boardWriter}</td>
                  <td>{board.createDate}</td>
                </tr>
              )
            })}
            
          </tbody>
        </table>
        <button type="button" onClick={(e) => {
          navigate('/writeForm')
        }}>글 등록</button>
      </>
    )
}
export default BoardList