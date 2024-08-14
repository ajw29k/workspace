import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ItemDetail.css'
import { login } from '../../apis/memberApi'

const ItemDetail = ({logInfo}) => {
  
  //이동할 페이지
  const navigate = useNavigate()
  //조회한 상세 정보 데이터 저장
  const [item,setItem] = useState({})
  //
  const {itemNum} = useParams();
  //메인 이미지 서브 이미지 변수 세팅
  const [mainImg, setMainImg] = useState('')
  const [subImg, setSubImg] = useState('')

  //총 가격을 저장하는 state 변수
  const [cnt, setCnt] = useState(0)
  //수량을 저장할 변수
  const [itemCnt, setItemCnt] = useState(1)
  useEffect(() => {
    axios.get(`/item/detail/${itemNum}`)
    .then((res) => {
      //조회한 정보에서 대표이미지명, 서브이미지명 찾기
      let img1= ''
      let img2= ''
      res.data.imgList.forEach((img,i) => {
        // 메인이미지 변수에 저장
        if(img.isName =='Y'){
          img1 =img.attachedFileName
        }
        // 서브이미지 변수에 저장
        else{
          img2 =img.attachedFileName
        }
      })
      
      setMainImg(img1)
      setSubImg(img2)
      setItem(res.data)

      setCnt(res.data.itemPrice)
      setCart({
        ...cart,
        itemCode : res.data.itemCode,
        memId : logInfo.memId
      })
      console.log(item)
      
    })
    .catch((error) => {})
    },[])
  
  //장바구니에 담기 (아이디 찾기)
  console.log('@@@' + logInfo.memId)
  
  //수량이 변경되는 실행되는 함수
  function changeItemCnt(e){
    const num = Number(e.target.value)
    if(num < 1 || num > 10){
      alert('수량은 최대 10개, 최소 1개 가능합니다')
      setItemCnt(1)
      setCnt(item.itemPrice)
    }
    else{
      setItemCnt(e.target.value)
      //총 가격 계산 : 단가 * 수량
      setCnt(item.itemPrice * Number(e.target.value))
    }
    setCart({
      ...cart,
      cartCnt : num
    })

    console.log(cart);
  }
  //장바구니에 담을 변수
  const [cart, setCart] = useState(
    {
      memId : '',
      itemCode : 0,
      cartCnt : itemCnt
    }
  )
  //장바구니 담기
  function isertCart(){
    console.log(cart)
    axios.post(`/item/insertCart`,cart)
    .then((res)=>{
      navigate(`/cartList/${logInfo.memId}`)
    })
    .catch((error) =>{
      console.log(error)
    })
  }
  return (
    <div className='con'>
      <div>
        <div className='detail-img'>
          {
          // item.imgList != '' ? 
          <img className='mainImg' 
          src={`http://localhost:8080/upload/${mainImg}`}/>
          // :
          // <></>
          }
        </div>
        <div className='detail-div'>
          <div>상품명 : {item.itemName}</div>
          <div>가격 : ￦ {Object.keys(item).length == 0 ? ''  : item.itemPrice.toLocaleString()
          }</div>
          <div>수량 : <input className='cartCnt' type='number' name='cartCnt'  value={itemCnt} onChange={(e)=>{
            changeItemCnt(e)            
          }}/></div>
          <div>총가격 : ￦ {cnt.toLocaleString()}</div>
          <div>
            <button type='button' className='btn b3'>구매하기</button>
            <button type='button' className='btn b3' onClick={() => {
              isertCart()
              
            }}>장바구니에 담기</button>
          </div>
        </div>
      </div>
      <div className='intro'><h2>{item.itemIntro}</h2></div>
      <div className='footter'>
        {
          item.imgList != '' ?
          <img className='imgDetail' 
          src={`http://localhost:8080/upload/${subImg}`}/>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default ItemDetail