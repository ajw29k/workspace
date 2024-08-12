import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Viewer from './Viewer';
import Controller from './Controller';

function App(num) {
  let[count, setCount] = useState(0);

  function changeConut(num){
    // console.log(num);
    const result = count + Number(num);
    console.log(result)
    setCount(result);
  }
  

  return (
    <div className="App">
      <div className='aaa'>
        <div><span>Simple Counter</span></div>
          <Viewer count={count} />
          <Controller changeCount={changeConut}/>
      </div>
    </div>
  );
}


  



export default App;
