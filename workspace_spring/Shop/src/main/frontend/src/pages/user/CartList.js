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

      //조회된 장바구니 목록만큼 체크박스의 값을 설정
      const checkArr = new Array(res.data.length);
      checkArr.fill(true)
      setChk(checkArr)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  //전체 체크박스
  const [allChk, setAllChk] = useState(true)
  function isAllChk(e){
    // setAllChk(e.target.checked)
    // setChk(e.target.checked)
  }

  //내용줄 안의 체크박스들 체크여부를 저장하는 변수
  const [chk, setChk] = useState([])
  function isChk(e){
    const chked = [...chk]
    setChk(chked)
  }
  // console.log(cartList[0].cartDate)

  useEffect(() => {
    //마운트 됐을때 실행하지 않겠다!!
    if(chk.length != 0){
      //제목줄이 체크 -> 전체체크박스 체크
      const copyChks = [...chk];
      
      if(allChk){
        copyChks.fill(true)
      }
      else{
        copyChks.fill(false)
      }

      setChk(copyChks)
    }
  },[allChk])
  //제목줄의 체크박스 변경 시 실행되는 함수
  const changeChkall = () => {
    setAllChk(!allChk)
  }
  
  const deleteBook = (e) => {
    axios
    .get(`/deleteBook`).then((res)=>{

    })
    .catch((error) => {console.log(error)})
  }
  const changeCnt = (e) => {
    
    // if(){
    //   alert(1)
    // }
  }
  return (
    <div className='cartListMain'>
      <table className='listTable'>
        <colgroup>
          <col width='5%'/>
          <col width='5%'/>
          <col width='*'/>
          <col width='10%'/>
          <col width='10%'/>
          <col width='12%'/>
          <col width='20%'/>
          <col width='10%'/>
        </colgroup>
        <thead>
          <tr>
            <td>No</td>
            <td><input type='checkbox' checked={allChk} 
            onChange={(e) => {
              changeChkall()
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
                  <td><input type='checkbox' checked={chk[i]}
                  onChange={() => {
                    const copyChks = [...chk];
                    copyChks[i] = !copyChks[i]
                    setChk(copyChks)
                  }}
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
                    changeCnt(e)
                  }}/></td>
                  <td>
                    {(cart.item.itemPrice * cart.cartCnt).toLocaleString()}
                  </td>
                  <td>{cart.cartDate}</td>
                  <td><button type='button' className='btn' onClick={() => {
                    deleteBook()
                  }}>삭제</button></td>
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