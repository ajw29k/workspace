import './reset.css';
import './App.css';
import './pages/Board.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Board from './pages/Board';
import Join from './pages/Join';
import Login from './pages/Login';
import Write from './pages/Write';

function App() {
  const navigate = useNavigate();


  return (
    <div className="container">
      <div className='header'>
        <div>
          <ul>
            <li><span onClick={() => {
              navigate('/login')
            }}>Login</span></li>
            <li><span onClick={() => {
              navigate('/join')
            }}>Join</span></li>
          </ul>
        </div>
        
      </div>
      <div className='content'>
        <div >
          
        </div>
        <div>
        <Routes>
          {/* 게시글 목록 페이지 */}
          <Route path='/' element = {<Board />} />
          {/* 회원가입 페이지 */}
          <Route path='/join' element = {<Join />} />
          {/* 로그인 페이지 */}
          <Route path='/login' element = {<Login />} />
          {/* 글쓰기 페이지 */}
          <Route path='/write' element = {<Write />} />
        </Routes>
        </div>
      </div>

      
    </div>
  );
}



export default App;
