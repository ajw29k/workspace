import Item from "./Item";

function ItemList({item_list}){

  console.log(item_list)
  return(
    <div className='book'>
      
        {
          item_list.map((item, e) => {
            return(
              <Item key={e} item={item} />
              
            )
          })
        }
      </div>
  )
}
export default ItemList;
