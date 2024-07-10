import axios from "axios";
import Item from "./Item";

function ItemList({item}){
  axios.get('/test4')
  .then((res) => {
    item.item_list = res.data;
    console.log(res.data);
  });
  
  return(
    <div className='book'>
      
        {
          item.map((item, e) => {
            return(
              <Item key={e} arr={item}/>
            )
          })
        }
      </div>
  )
}
export default ItemList;
