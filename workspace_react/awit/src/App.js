import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { getList } from './testApi';

function App() {
  let cnt = '';
  function test1(){

    console.log(1);
    
    axios.get('/test1')
    .then(res => {
      console.log(res.data);
      cnt = res.data; // ''
    })
    .catch(error => console.log(error));

    console.log(cnt);
  }
  //async가 붙으면 함수가 비동시 방식으로 진행
  //async
  async function test2(){
    //await 명령어 사용 시 동기 방식으로 진행
    try{
      let cnt = '';
      console.log(11);
      const res = await axios.get('/test1');
      //위의 통신에서는 비동기 방식이라 cnt값이 undefined가 되고
      //await 명령어 사용시 값을 받아오는 걸 기다려준다..
      cnt = res.data; // 'test1'
    }catch(error){

    }
    
  }

  function test3(){
    console.log(1);
    test2();
    console.log(2);
  }
  return (
    <div className="App">
      <div>
        <button type='button' onClick={test3}>test1</button>
        {/* <button type='button' onClick={test1()}>test1</button> */}
        <button type='button' onClick={getList()}>test1</button>
      </div>
    </div>
  );
}

export default App;
