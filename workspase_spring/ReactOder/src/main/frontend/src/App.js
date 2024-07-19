import logo from './logo.svg';
import './reset.css';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Order from './Order';
import Item from './Item';
import InsertItem from './InsertItem';
import ItemList from './ItemList';
import OrderList from './OrderList';
import './Item.css';
import './ItemList.css';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li onClick={() => {navigate('/')}}><span>상품정보</span></li>
          <li onClick={() => {navigate('/insert')}}><span>상품등록</span></li>
          <li onClick={() => {navigate('/order')}}><span>주문하기</span></li>
          <li onClick={() => {navigate('/itemList')}}><span>주문목록</span></li>
        </ul>
      </header>
      <div className='content'>
          <Routes>
            <Route path='/' element = {<ItemList />} />
            <Route path='/detail/:itemNum' element = {<Item />} />
            <Route path='/insert' element = {<InsertItem />} />
            <Route path='/order' element = {<Order />} />
            <Route path='/itemList' element = {<OrderList />} />
          </Routes>
          
      </div>
    </div>
  );
}

export default App;
