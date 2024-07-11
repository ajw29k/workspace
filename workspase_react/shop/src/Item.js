import { Link, useNavigate } from "react-router-dom";

const Item = ({item}) => {
  //navigate 는 함수!!
  //navigate('이동할 url'); 
  //navigate(-1); 
  const navigate = useNavigate();
  console.log(item)
  console.log(`${item.book_Num}`)
  
  return(
    <div>
      <div className="item">
      <img src={process.env.PUBLIC_URL + `/${item.imgName}`} onClick={(e) => {
        navigate(`/detail/${item.book_Num}`);
      }}/>
      
      
      {/* <Link to={'/detail'}><img src={process.env.PUBLIC_URL + `/${item.imgName}`} /></Link> */}
      
       </div>
       <div><h3>{item.item_Name}</h3></div>
       <div>{item.price}</div>
    </div>
  )
}

export default Item;