import { useNavigate, useParams } from 'react-router-dom';
import './Detail.css';
import Item from './Item';


const Detail = ({item_list}) =>{
  //url로 전달되는 데이터 받기
  // const params = useParams();
  //1번 방식
  // console.log(params);
  // console.log(params.id);
  
  // 2번 방식
  const {id} = useParams();
  //id값
  console.log(id);
  const navigete = useNavigate();
  return(
    
    <div>
      {
          item_list.map((item, e) => {
            if(id==item.book_Num){
            console.log(item.book_Num , e)
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
                  navigete(-1)
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