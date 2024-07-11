import logo from './logo.svg';
import './App.css';
import data from './data';
import Board from './Board';
import { Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import Writeform from './Writeform';


function App() {
  let list = data;
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Board list = {list}/>}  />
        <Route path='/detail/:id' element = {<Detail  list ={list}/>}/>
        <Route path='/writeform' element = {<Writeform />} /> 
        {/* <Route path='/delete' element = {<Delete />} /> */}
      </Routes>
    </div>
  );
}

export default App;
