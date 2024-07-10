const Item = ({item}) => {

  return(
    <div>
      <div className="item">
      <img src={process.env.PUBLIC_URL + `/${item.imgName}`} />
       </div>
       <div><h3>{item.item_Name}</h3></div>
       <div>{item.price}</div>
    </div>
  )
}

export default Item;