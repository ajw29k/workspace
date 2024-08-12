import logo from './logo.svg';
import './reset.css';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import StuList from './StuList';
import StuInsert from './StuInsert';
import StuDelete from './StuDelete';
import StuInfo from './StuInfo';
import Student from './Student';
import { StuScore } from './StuScore';
function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="App">
        {/* 헤더영역 */}
        <ul>
          <li onClick={() => { navigate('/')}}><span>학생정보조회</span></li>
          <li onClick={() => { navigate('/stuInsert')}}><span>학생 등록</span></li>
          <li onClick={() => { navigate('/stuDelete')}}><span>학생 삭제</span></li>
          <li onClick={() => { navigate('/stuInfo')}}><span>성적 관리</span></li>
        </ul>
        <div className='content'>
          <Routes>
            {/* 학생 정보 조회 */}
            <Route path='/' element = {<StuList />} />
            {/* 학생 상세 정보 조회 */}
            <Route path='/student/:stuNum' element = {<Student />} />
            {/* 학생 등록 */}
            <Route path='/stuInsert' element = {<StuInsert />} />
            {/* 학생 삭제 */}
            <Route path='/stuDelete' element = {<StuDelete />} />
            {/* 성적 관리 */}
            <Route path='/stuInfo' element = {<StuInfo />} />

            {/* 성적 관리(점수등록) */}
            <Route path='/stuScore/:stuNum' element = {<StuScore />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
