import axios from "axios"
import { useEffect, useState } from "react"

const AxiosTest = () => {

  //spring 서버와 데이터 통신을 위해 react에서는 axios 기술 사용
  //axios 설치 : npm install axios

  //axios는 데이터베이스의 작업 종류에 따라 함수를 제공
  //get(url [, config]) : 데이터 조회 (SELECT)      
  //post(url, data, [,config]) : 데이터 삽입(INSERT) 
  //put(url, data [, config]) : 데이터 수정(UPDATE) ==post랑 똑같음
  //delete(url [, config]) : 데이터 삭제(UPDATE)  ==get이랑 똑같음

  //사용 문법
  // axios
  //  .get() ('url')
  //  .then(데이터 통신 성공 후 실행 내용)
  //  .catch(데이터 통신 중 오류 발생 시 실행);

  //기본형태
    // axios
    // .get('/')
    // .then( (res) => {} )
    // .catch( (error) => {} );


  // 쿼리에 빈값이 없는 데이터 조회
  const [gg , getGg] = useState([])
  function get1(){
    axios
    .get('getList')
    .then((res)=>{
      console.log(res.data)
      getGg(res.data)
    })
    .catch((error) => {
      console.log('오류발생')
      console.log(error)
    });
  }
  
  const member = {name : 'kim', age : 20};
  //post로 데이터 전달하기
  function postTest(){
    axios
    // .post('/insertBoard', {name :'kim', age : 20})
    .post('/insertBoard', member)
    .then((res) => {})
    .catch((error) => {
      console.log(error)
    });
    
  }
  
  //put 테스트
  function putTest(){
    axios   // put > java(controller) > then 순서대로
    .put('/updateBoard', {
      boardNum : 1,
      boardTitle : '자바',
      boardWriter : '홍길동'
    })
    .then((res) => {
      alert('내용을 수정했습니다')
      alert(res.data)
    })
    .catch((error) => {});
  }
  function get2(){
    axios
    .get('/detail/1')
    .then((res)=>{
    })
    .catch((error) => {
    });
  }
  
  return(
    <div>
      <h2>axios 통신 예제</h2>
      <div className="btn-div">
        <button type="button" onClick={() => {get1()}}>get으로 데이터 조회하기 1</button></div>
        <div className="btn-div"><button type="button" onClick={() => {get2()}}>get으로 데이터 전달하기 </button></div>
        <div className="btn-div"><button type="button" onClick={() => {postTest()}}>post로 데이터 전달하기 </button></div>
        <div className="btn-div"><button type="button" onClick={() => {putTest()}}>put으로 데이터 전달하기 </button></div>
      

      
    </div>
  )

}

export default AxiosTest;