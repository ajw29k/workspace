import './reset.css'
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
import Join from './pages/user/Join';
import Login from './pages/user/Login';

function App() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className='login-div'>
        <div>
          <ul className='header-menu'>
            <li>
              <span onClick={() => {navigate('/login')}}>Login</span>
            </li>
            <li>
              <span onClick={() => {navigate('/join')}}>Join</span>
            </li>
          </ul>
        </div>
       
      </div>
      <div className='banner'>
          <img className='banner-img' src='http://localhost:8080/images/book_banner.PNG' />
        <div className='title-div'>BOOK SHOP</div>
      </div>
      <div className='layout-div'>
        <Routes>
          <Route path='/join' element ={<Join />}/>
          <Route path='/login' element ={<Login />}/>
        {/* 일반 유저용 */}
          <Route path='/' element ={<UserLayout />}>
            {/* 상품 목록 화면 */}
            <Route path='' element = { <div>상품목록화면</div> }/>
            <Route path='test1'element={<div>1번화면</div>}/>
            <Route path='test2'element={<div>2번화면</div>}/>
          </Route>


        {/* 관리자용 */}
          <Route path='/admin' element = {<AdminLayout />} >
            <Route path='test1' element ={ <div>상품등록 페이지</div>}/>
          </Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
