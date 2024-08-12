import logo from './logo.svg';
import './App.css';
import List from './List';
import Add from './Add';
import { useState } from 'react';

function App() {
  const [list, setList] = useState(['계란한판','생수','불고기용 돼지고기']);

  return (
    <div className="App">
      <List list={list} setList = {setList}/>
      <Add list={list} setList = {setList}/>
      
      
        
      {/* <List list={list}/>
      <Add/> */}
      


    </div>
  );




  
}




export default App;
