import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [isShow, setIsShow] = useState(false);

  const [index, setIndex]= useState(0);

  const board_list = [
    {
      boardNum : 1,
      title : '첫번째 게시글',
      content : '첫번째 내용',
      writer : '김바자'
    },{
      boardNum : 2,
      title : '두번째 게시글',
      content : '두번째 내용',
      writer : '신태양'
    },{
      boardNum : 3,
      title : '세번째 게시글',
      content : '세번째 내용',
      writer : '보보보'
    }
  ];


  const [board_lists, setBoardList] = useState(board_list);
  
  return (
    <div className="App">
      <div className='container'>
        <table>
          <thead>
            <tr>
              <td>글번호</td>
              <td>제목</td>
              <td>작성자</td>
            </tr>
          </thead>
          <tbody>
            {
            board_list.map((board, i) => {
              return(
                <tr key ={i}>
                  <td>{board.boardNum}</td>
                  <td >
                    <span className='title-span' onClick={() => {
                    setIsShow(true);
                    setIndex(i);
                    <Detail />
                  }}>{board.title}</span>
                    </td>
                  <td>{board.writer}</td>
                </tr>
                // <Board a = {board} />
  
              )
            })
              
            }
        </tbody>
        </table>
          { 
          isShow ? <Detail board = {board_list[index]} /> : null
          }
      </div>
    </div>
  );
}

  function Detail(pro){
    return(
      <div className='detail'>
        <div>글번호 : {pro.board.boardNum} </div>
        <div>제목 : {pro.board.title} </div>
        <div>내용 : {pro.board.content} </div>
        <div>작성자 : {pro.board.writer} </div>
      </div>
    )
  }


export default App;
