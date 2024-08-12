import './App.css';
import { Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';
import WriteForm from './WriteForm';
import Detail from './Detail';
import UpdateForm from './UpdateFrom';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* axios 예제 페이지 */}
        {/* <Route path='/axios' element = {<AxiosTest />} /> */}

        {/* 게시글 목록 페이지 */}
        <Route path='/' element={<BoardList />}  />

        {/* 상세 정보 페이지 */}
        <Route path='/detail/:boardNum' element={<Detail />} />

        {/* 글 등록 페이지 */}
        <Route path='/writeForm' element={<WriteForm />} />

        {/* 글 수정 페이지 */}
        <Route path='/updateForm/:boardNum' element={<UpdateForm />} />
      </Routes>
      
    </div>
  );
}

export default App;
