import './App.css';
import { Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';
import WriteForm from './WriteForm';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* axios 예제 페이지 */}
        {/* <Route path='/axios' element = {<AxiosTest />} /> */}

        {/* 게시글 목록 페이지 */}
        <Route path='/' element={<BoardList />}  />
        <Route path='/writeForm' element={<WriteForm />} />

        {/* 상세 정보 페이지 */}
        <Route path='/detail/:boardNum' element={<Detail />} />
      </Routes>
      
    </div>
  );
}

export default App;
