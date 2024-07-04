import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//App() 함수의 리턴문 안에 작성하는 코드가 화면에 나타남.
//html 코드처럼 보이는 것은 실은 jsx 라는 문법이다.
//그렇기 때문에 html과 조금 다른 부분이 있다
function App() {
  const titles = ['울산 맛집', '부산 맛집', '대구 맛집'];

  //좋아요 갯수
  let cnt = 0;
  
  //대괄호의 첫번째 : 변수
  let [likeCnt, setLikeCnt] = useState(0);
  //likeCnt = 0;
  let [name, setname] = useState('java');
  //let name = java;
  let [arr, setarr] = useState([1,2,3]);
  //let arr = [1,2,3];

  function test(){
    likeCnt++;
    alert(1);

  }
  
  

  return (
    <div className="App">
      <div className="blog-nav">
        <h3>My Blog</h3>
      </div >
      <div className="list">
        <h4>
          {titles[0]}
          <span onClick={() => {
            likeCnt = likeCnt+1;
          }}>👍</span>
          {cnt} {likeCnt}
        </h4>
        <p>2024-07-10</p>
      </div>  
      <div className="list">
        <h4>{titles[1]}╰(*°▽°*)╯</h4>
        <p>2024-07-10</p>
      </div>  
      <div className="list">
        <h4>{titles[2]}</h4>
        <p>2024-07-10</p>
      </div>

    </div>
  );
}



export default App;
