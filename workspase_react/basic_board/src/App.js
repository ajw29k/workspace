import logo from './logo.svg';
import './App.css';
import data from './data';
import Board from './Board';
import { Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import Writeform from './Writeform';
import { useState } from 'react';
import InputTest from './InputTest';


function App() {
  //게시글 목록
  // let list = data;
  const [boarList, setBoardList] = useState(data);
  
  
  

  return (
    <div className="App">
      <Routes>
        {/* 글 목록 리스트 */}
        <Route path='/' element ={<Board list = {boarList}/>}  />
        {/* 글 상세보기 */}
        <Route path='/detail/:id' element = {<Detail  list ={boarList}/>}/>
        {/* 글 쓰고 추가 */}
        <Route path='/writeform' element = {<Writeform list = {boarList} setBoardList = {setBoardList} />} /> 
        {/* 글 삭제 */}
        {/* <Route path='/dde' element = {<Delete />} /> */}
        <Route path='/test' element={<InputTest />} />
      </Routes>

      
    </div>
  );
}

export default App;