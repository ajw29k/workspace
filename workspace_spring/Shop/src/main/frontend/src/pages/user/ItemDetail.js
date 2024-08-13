import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({setLogInfo}) => {
  const navigate = useNavigate()
  const [item,setItem] = useState({
    itemCode : 0
    ,itemName : ''
    ,itemPrice : 0
    ,itemIntro : ''
    ,itemStock : 0
    ,itemStatus : ''
    ,cateCode : 0
    ,imgList : []
  })
  const {itemNum} = useParams();
  useEffect(() => {
    axios.get(`/item/detail/${itemNum}`)
    .then((res) => {
      setItem(res.data)
    })
  },[])
  const [cnt, setCnt] = useState(1)
  const logInfo = window.sessionStorage.getItem('logInfo')
  console.log(JSON.parse(logInfo))
  
  
  return (
    <div className='con'>
      <div>
        <div className='detail-img'>
          {
          item.imgList != '' ? 
          <img className='mainImg' 
          src={`http://localhost:8080/upload/${item.imgList[0].attachedFileName}`}/>
          :
          <></>
          }
        </div>
        <div className='detail-div'>
          <div>상품명 : {item.itemName}</div>
          <div>가격 : ￦ {item.itemPrice.toLocaleString()}</div>
          <div>수량 : <input className='cartCnt' type='number' name='cartCnt' onChange={()=>{
            setCnt(cnt)
          }}/></div>
          <div>총가격 : ￦ {(item.itemPrice*cnt).toLocaleString()}</div>
          <div>
            <button type='button' className='btn b3'>바로 구매하기</button>
            <button type='button' className='btn b3' onClick={() => {
              navigate(`/cartList/${logInfo.memid}`)
            }}>장바구니에 담기</button>
          </div>
        </div>
      </div>
      <div className='footter'>
        {
          item.imgList != '' ?
          <img className='imgDetail' 
          src={`http://localhost:8080/upload/${item.imgList[1].attachedFileName}`}/>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default ItemDetail