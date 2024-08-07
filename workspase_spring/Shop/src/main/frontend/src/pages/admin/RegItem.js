import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../admin/RegItem.css'
import Modal from '../../common/Modal'
import { useNavigate } from 'react-router-dom'

const RegItem = () => {
  const [cateList, setCateList] = useState([])
  const [itemCategory, setItemCategory] = useState({
    cateCode : 1,
    itemName : '',
    itemPrice : 0,
    itemIntro : ''
  })
  useEffect(() => {
  axios
  .get('/admin/regItem')
  .then((res) => {
    console.log(res.data)
    setCateList(res.data)
  })
  .catch((error) => {
    console.log(error)
  })
  },[])
  
  function change(e){
    setItemCategory({
      ...itemCategory,
      [e.target.name] : e.target.value
    })
  }

  function insertItem(){
    if(itemCategory.itemName == ''|| itemCategory.itemPrice == 0 || itemCategory.itemIntro == ''){
      alert('입력하세요')
      return;
    }
    axios.post('/admin/insertItem',itemCategory)
    .then((res) => {console.log(res.data)
      setIsItem(true)
    
    })

    .catch((error) => {console.log(error)})
  }

  // -------모달창 ----------
  const navigate = useNavigate()
  const [isItem, setIsItem] = useState(false)
  function itemcontent(){
    return(
      <div>상품이 등록되었습니다.</div>
    )
  }
  function returnAdmin(){
    navigate('/admin')
  }
  return (
    <div className='reg-item-div'>
      <div className='input-element'>
        <div>상품 카테고리</div>
        <div>
          <select className='form-control' name='cateCode' onChange={(e) => {change(e)}}>
            {
              cateList.map((cate, i) => {
                return(
                    <option value={cate.cateCode} key={i}>{cate.cateName}</option>
                  )
                })
              }
          </select>
        </div>
      </div>
      <div className='input-element'>
        <div>상품명</div>
        <div><input type='text' name='itemName' className='form-control' onChange={(e) => {change(e)}}/></div>
      </div>
      <div className='input-element'>
        <div>상품 가격</div>
        <div><input type='text' name='itemPrice' className='form-control' onChange={(e) => {change(e)}}/></div>
      </div>
      <div className='input-element'>
        <div>상품 소개</div>
        <div>
          <textarea name='itemIntro' className='form-control' rows={7} onChange={(e) => {change(e)}}></textarea>
        </div>
      </div>
      <div className='btn-div'>
        <button type='button' className='btn btn-primary' onClick={() => {insertItem()}}>상품등록</button>
      </div>
      {
        isItem
        ?
        <Modal 
        content ={itemcontent}
        setIsShow = {setIsItem}
        clickClosebtn ={returnAdmin}
        />
        :
        <></>
      }
    </div>
  )
}

export default RegItem
