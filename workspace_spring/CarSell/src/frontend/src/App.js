import './reset.css';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Menu from './pages/Menu';
import Main from './pages/Main';
import Sales from './pages/Sales';
import SalesList from './pages/SalesList';
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="menu">
        <ul>
          <li onClick={() => {navigate('/')}}>홈</li>
          <li onClick={() => {navigate('/menu')}}>차량관리</li>
          <li onClick={() => {navigate('/sales')}}>판매 정보 등록</li>
          <li onClick={() => {navigate('/salesList')}}>판매 목록</li>
        </ul>
      </header>
      <div>
        <Routes>
          <Route path='/' element = {<Main />} />
          <Route path='/menu' element = {<Menu />} />
          <Route path='/sales' element = {<Sales />} />
          <Route path='/salesList' element = {<SalesList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
