import logo from './logo.svg';
import './App.css';
import data from './deta';
import ItemList from './ItemList';
import axios from 'axios';
import { useState } from 'react';

function App() {
  //상품 목록 데이터
  let item_list = [];
  // axios.get('/test1')
  //   .then((response) => {
  //     console.log(response.data);
  //   });

  // axios.get('/test2')
  //   .then((res) => {
  //     console.log(res.data);
  //   });

   let arr = []; 
  // axios.get('/test3')
  //   .then((res) => {
  //     console.log(res.data);
  //     arr = res.data;

  //   });

    axios.get('/test4')
    .then((res) => {
      item_list = res.data;
      console.log(res.data);
    });

  return (
    <div className="App">
      <div className='header'>
        Book Shop
      </div>
      <div className='banner'>
        <img src={process.env.PUBLIC_URL + '/header.jpg'} />

      </div>
      
      <ItemList item={item_list}/>
      <Test name ={'홍길동'} age = {20}/>
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
