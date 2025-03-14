import './reset.css'
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
import Join from './pages/user/Join';
import Login from './pages/user/Login';
import { useEffect, useState } from 'react';
import Novel1 from './pages/user/Novel1';
import RegItem from './pages/admin/RegItem';
import ItemList from './pages/user/ItemList';
import ItemDetail from './pages/user/ItemDetail';
import ItemManage from './pages/admin/ItemManage';
import CategoryManage from './pages/admin/CategoryManage';
import SaleHistoryOfMonth from './pages/admin/SaleHistoryOfMonth';
import RecodeOfMonth from './pages/admin/RecodeOfMonth';
import SearchUser from './pages/admin/SearchUser';
import CartList from './pages/user/CartList';

//새로고침하면 state 변수의 값이 전부 초기화 된다
//재랜더링하면 state 변수의 값은 보존된다
//새로고침과 재랜더링은 다르다
//state 변경함수는 모든 코드 가 실행 된 후 일괄적으로 한 번에 처리
//state 변경함수는 비동기 방식이므로 주의!
function App() {
  const[data,setData] =useState('react')
  const[data2,setData_2] =useState('20')

  const navigate = useNavigate();
  //로그인 정보를 저장할수 있는 state 변수
  const [logInfo, setLogInfo] = useState({})
  console.log(logInfo)
  //화면 시작시 로그인 정보를 저장
  useEffect(() => {
    //로그인 정보를 담을 변수
    const logInfoString = window.sessionStorage.getItem('logInfo')
    //
    if(logInfoString != null){
      const logData = JSON.parse(logInfoString)
      setLogInfo(logData)
    }
  },[])
  //함수 실행시 로그아웃
  function remove(){
    window.sessionStorage.removeItem('logInfo')
    //로그인 정보 지운후 로그인정보 빈객체로 재랜더링
    navigate('/')
    setLogInfo({})
  }
  return (
    <div className="container">
      <div className='login-div'>
        <div>
          {logInfo.memId !=null 
          ?
           <>
          <div className='c'>{logInfo.memName}님 반갑습니다.
            <button type='button' className='btn2' onClick={() => {navigate(`/cartList/${logInfo.memId}`)}}>장바구니</button>
            <button type='button' className='btn2' onClick={() => {remove()}}>로그아웃</button>
          </div>
          <div>
            
          </div></>
          :
          <ul className='header-menu'>
            <li>
              <span onClick={() => {navigate('/login')}}>Login</span>
            </li>
            <li>
              <span onClick={() => {navigate('/join')}}>Join</span>
            </li>
          </ul>}
          
        </div>
       
      </div>
      <div className='banner'>
          <img className='banner-img' src='http://localhost:8080/images/book_banner.PNG' />
        <div className='title-div'>BOOK SHOP</div>
      </div>
      <div className='layout-div'>
        <Routes>
          <Route path='/join' element ={<Join />}/>
          <Route path='/login' element ={<Login setLogInfo = {setLogInfo}/>}/>
        {/* 일반 유저용 */}
           
            <Route path='/' element ={<UserLayout />}>
            {/* 상품 목록 화면 */}
              <Route path='' element={<ItemList />}/>
              <Route path='novel'element={<Novel1 />}/>
              {/* 상품 상세 정보 */}
              <Route path='detail/:itemNum'element={<ItemDetail logInfo = {logInfo}/>}/>
              {/* 장바구니 */}
              <Route path='cartList/:memId'element={<CartList logInfo = {logInfo}/>}/>
            </Route>
            {logInfo.memRole =='ADMIN'?
          // 관리자용 페이지
            <Route path='/admin' element = {<AdminLayout />} >
              <Route path='test1' element ={ <div>상품등록 페이지</div>}/>
              {/* 상품 관리 화면 */}
              <Route path='itemManage' element ={ <ItemManage />}/>
                {/* 상품 등록 화면 */}
                <Route path='regItem' element ={ <RegItem />}/>
                {/* 카테고리 관리 */}
                <Route path='categoryManage' element ={ <CategoryManage />} />
              {/* 구매 관리 */}
                {/* 이달의 구매내역 */}
                <Route path='saleHistoryOfMonth' element ={ <SaleHistoryOfMonth />} />
              {/* 유저 관리 */}
              {/* 유저 검색 */}
              <Route path='searchUser' element ={ <SearchUser />}/>
              {/* 매출 관리 */}
              <Route path='recordOfMonth' element ={ <RecodeOfMonth />}/>
            </Route>
            :
            <></>
        }
          


        
          

        </Routes>
      </div>
    </div>
  );
}

export default App;
