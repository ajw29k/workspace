import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import data from './deta';
import ItemList from './ItemList';
import Detail from './Detail';

function App() {
  //상품 목록 데이터
  const item_list = data;
 
  return (
    <div className="App">
      <div className='header'>
        <Link to={'/'}>Book Shop</Link><br></br>
        <Link to={'/list'}>상품목록</Link><br></br>

        <Link to={'/detail/1'}>상품상세</Link>
        
        
      </div>
      <div className='banner'>
        <img src={process.env.PUBLIC_URL + '/header.jpg'} />
      </div> 
      
      {/* 이동할 수 있는 페이지의 url들 */}
      <Routes>
        <Route path='/' element={<div>메인페이지</div>} />
        <Route path='/list' element = {<ItemList item_list={item_list}/>} />
        <Route path='/detail/:id' element={<Detail item_list={item_list}  />} num={`/:id`} />
        <Route path='*' element={<div>잘못된 페이지입니다.</div>} />
      </Routes>        


      {/* <ItemList item_list={item_list}/> */}
      
    </div>
  );
}
const Test = ({name,age}) => {
  console.log(name,age)


  return(
    <div>Aloha</div>
  )
}
// function BookList(props){
//   return(
//     <div className='item'>
      
//       <div>
//         <img src={process.env.PUBLIC_URL + '/book_1.jpg'} />
//       </div>
//       <div><h3>{item_list[0].item_Name}</h3></div>
//       <div>50,000원</div>
//     </div>
//   )
// }

export default App;
