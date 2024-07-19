import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const ItemList = () => {
  const navigate =useNavigate();
  

  const [itemList , setItemList] = useState([])
  useEffect(() =>{
    axios
    .get('/itemList')
    .then((res) => {
      setItemList(res.data)
      console.log(res.data)
      
    })
    .catch((eroor) => {
      console.log(eroor)
    })
  },[])
  return (
    <div className='aa'>
      <div>총 {itemList.length} 개의 상품이 등록되었습니다</div>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>상품명</td>
            <td>상품가격</td>
            <td>판매자</td>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item , i) => {
            return(
              <tr key={i}>
                <td>{item.itemNum}</td>
                <td><span onClick={() => {
                  navigate(`/detail/${item.itemNum}`)
                }}>{item.itemName}</span></td>
                <td>{item.itemPrice}</td>
                <td>{item.seller}</td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default ItemList