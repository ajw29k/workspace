import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BoardList />}  />
        <Route path='/writeForm' element={<writeForm />} />
      </Routes>
      
    </div>
  );
}

export default App;
