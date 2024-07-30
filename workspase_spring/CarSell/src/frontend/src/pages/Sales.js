import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sales = () => {
  const navigate = useNavigate()
  const [carList , setCarList] =useState([])
  const [buyer, setBuyer] = useState({
    buyer : '',
    tell : '',
    color : '블랙',
    modelNum : 1
  })
  //차량모델네임 불러오기
  useEffect(() => {
    axios.get('/car/list')
    .then((res) => {
      setCarList(res.data)

    })
    .catch((error) => {
      console.log(error)
    })
  },[])
  //바뀌는값
  function gochange(e){
    setBuyer({
      ...buyer,
      [e.target.name] : e.target.value
    })
  }
//등록버튼
  function insertSal(){
    if(buyer.buyer != ''){
    axios.post('/sales/insert',buyer)
    .then((res) => {console.log(res.data)
      setBuyer(res.data)
      navigate('/salesList')
    })
    .catch((error) => {console.log(error)})
  }
  alert('구매자명을 입력하세요')
  }
  return (
    <div>
      <div>
        구매자명 <input type='text' name='buyer' onChange={(e) => {gochange(e)}}/>
      </div>
      <div>
        색상
        <select name='color' onChange={(e) => {gochange(e)}} >
          <option value='블랙'>블랙</option>
          <option value='화이트'>화이트</option>
          <option value='실버'>실버</option>
          <option value='레드'>레드</option>
        </select>
        모델 
        <select name='modelNum' onChange={(e) => {gochange(e)}}>
          {
            carList.map((car,i) => {
              return(
                <option value={car.modelNum} key={i}>{car.modelName}</option>
              )
            })
          }
        </select>
        
      </div>
      <div>연락처 <input type='text' name='tell' onChange={(e) => {gochange(e)}} /></div>
      <div><button type='button' onClick={() => {insertSal()}} >등록</button></div>
    </div>
  )
}

export default Sales