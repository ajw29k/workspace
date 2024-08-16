import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CartList.css'
import { useParams } from 'react-router-dom'
const CartList = () => {
  const {memId} = useParams();
  //장바구니 리스트 담기
  const [cartList, setCartList] = useState([])
  useEffect(() => {
    axios.get(`/cart/cartList/${memId}`)
    .then((res) => {
      console.log(res.data)
      setCartList(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  //체크박스
  const [chk, setChk] = useState([])
  //전체 체크박스
  const [allChk, setAllChk] = useState(true)
  function isAllChk(e){
    setAllChk(e.target.checked)
    setChk(e.target.checked)
  }
  function isChk(e){
    const chked = [...chk]
    setChk(chked)
  }
  // console.log(cartList[0].cartDate)
  
  return (
    <div className='cartListMain'>
      <table className='listTable'>
        <colgroup>
          <col width= '5%'></col>
          <col width= '5%'></col>
          <col width= '15%'></col>
          <col width= '15%'></col>
          <col width= '5%'></col>
          <col width= '10%'></col>
          <col width= '10%'></col>
          <col width= '5%'></col>
        </colgroup>
        <thead>
          <tr>
            <td>No</td>
            <td><input type='checkbox' checked={allChk} 
            onChange={(e) => {
              isAllChk(e)
            }}/></td>
            <td>상품 정보</td>
            <td>가격</td>
            <td>수량</td>
            <td>구매가격</td>
            <td>구매일시</td>
            <td>{''}</td>
          </tr>
        </thead>
        <tbody>
          {
            cartList.map((cart, i) => {
              return(
                <tr key={i}>
                  <td>{cartList.length - i}</td>
                  <td><input type='checkbox' checked={chk[i]||false}
                  onChange={() => {isChk(i)}}
                  /></td>
                  {
                    cart.item.imgList.attachedFileName == null ?
                    <td>
                      <img className='img-td' src={`http://localhost:8080/upload/${cart.item.imgList[0].attachedFileName}`}/>
                      {cart.item.itemName}
                    </td>
                    :
                    <></>
                    }
                  <td>
                    ￦{(cart.item.itemPrice).toLocaleString()} 원
                  </td>
                  <td><input type='number' defaultValue={cart.cartCnt} onChange={(e) => {

                  }}/></td>
                  <td>
                    {cart.item.itemPrice * cart.cartCnt}
                  </td>
                  <td>{cart.cartDate}</td>
                  <td><button type='button'>삭제</button></td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
      <div>총 구매금액 ￦{}</div>
    </div>
  )
}

export default CartList