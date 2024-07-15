import { useNavigate, useParams } from 'react-router-dom';
import './Detail.css';
import Item from './Item';
import { useEffect, useState } from 'react';


const Detail = ({item_list}) =>{
  //url로 전달되는 데이터 받기
  //1번 방식
  // const params = useParams();
  
  // console.log(params);
  // console.log(params.id);
  
  // 2번 방식
  const {id} = useParams();
  //id값
  // console.log(id);
  const navigete = useNavigate();

  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  //해당 컴포넌트가 랜더링되면 마지막에 실행
  //mount(컴포넌트를 새로 읽을 때) + update(재랜더링) 될때 실행
  //useEffect에 두번째 매개변수가 없으면 mount + update ㄷ
  useEffect(() =>{
    console.log(1);
  })
  
  // mount(컴포넌트를 새로 읽을 때) 될 때 실행
  // 두번째 매개변수로 빈 배열을 전달하면 mounte 될때만 실행
  useEffect(() => {
    console.log(2);

  }, [])
  
  //두번째 매개변수에 배열 형태로 state변수를 넣으면 해당 UseEffect는 mount + 배열에 넣은 state갑이 번경되어 재랜더링 될때 실행
  useEffect(() => {
    console.log(3);

  }, [num])
  
  useEffect(() => {
    console.log(4);
    
  }, [num, num1])
  
  useEffect(() => {
    console.log(5);
 
    //return 안의 내용은 마운트 될때 실행X
    //update 될 떄 실행되는데 가장 먼저 실행함
    //unmount 될때도 실행
    return () => {
      console.log(6);

    }

  })

  // 언마운트 될때만 7
  useEffect(() => {
    return() => {
      console.log(7)
    }
  },[])
  return(
    
    <div>
      <button type='button' onClick={() =>{
        {setNum(num+1)}
      }}>num값 변경</button>
      <div>num ={num}</div>

      <button type='button' onClick={() =>{
        {setNum1(num1+1)}
      }}>num1값 변경</button>
      <div>num1 ={num1}</div>

      {
          item_list.map((item, e) => {
            //params.id
            if(id==item.book_Num){
            // console.log(item.book_Num , e)
            return(
              
              <div>
                <div >
                  <div className="item-info">
                    <img src={process.env.PUBLIC_URL + '/'+`${item.imgName}`}/>
                    <div>
                      <h4>{item.item_Name}</h4>
                      <p>{item.price}</p>
                      <button type='button'>주문하기</button>
                    </div>
                  </div>
                </div>
                <div className="intro">
                  {item.intro}
                  <button type='button' onClick={() =>{
                  navigete('/list')
                }}>뒤로가기</button>
                </div>
                
              </div>  
              
            )
          }
          })

      }
        
      {/*  */}
     
    
    </div>
  )
}

export default Detail;