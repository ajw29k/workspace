import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = () => {
  const [item,setItem] = useState({})
  const {itemNum} = useParams();
  console.log(itemNum)
  useEffect(() => {
    axios.get(`/item/detail/${itemNum}`)
    .then((res) => {
      setItem(res.data)
      console.log(item)
    })
  },[])
  console.log(item)
  return (
    <div className='con'>
      <div>
        {/* <div><img src={`http://localhost:8080/upload/${item.imgList[0].attachedFileName}`}/></div> */}
        <div>{item.itemName}</div>
      </div>
    </div>
  )
}

export default ItemDetail