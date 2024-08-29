import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../admin/RegItem.css'
import Modal from '../../common/Modal'
import { useNavigate } from 'react-router-dom'

const RegItem = () => {
  //카테고리 목록 저장할 변수
  const [cateList, setCateList] = useState([])
  //상품등록 시 가져갈 데이터를 저장할 변수
  const [itemCategory, setItemCategory] = useState({
    cateCode : 1,
    itemName : '',
    itemPrice : 0,
    itemIntro : ''
  })
  //카테고리 목록 불러오기
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
  //첨부파일을 저장할 변수
  const [mainImg , setMainTg] = useState(null);
  const [subImg , setSubImg] = useState(null)
  //상품등록 버튼
  function insertItem(){
    axios.post('/',itemCategory)// 자바로 넘어가는거 확인
    .then().catch()
    // if(itemCategory.itemName == ''|| itemCategory.itemPrice == 0 || itemCategory.itemIntro == ''){
    //   alert('입력하세요')
    //   return;
    // }
    //axios 통신으로 자바로 갈때 첨부파일이 있으면 
    //반드시 아래의 설정 코드를 axios에 추가!!!
    const fileConfig = {headers : {'Content-Type' : 'multipart/form-data'}}
    //자바로 데이터 가져가서 등록
    //위의 설정코드를 axios 통신할 때 추가하면
    //자바로 넘어가는 데이터를 전달하는 방식이 달라짐
    //첨부파일이 있는 데이터를 자바로 전달하기 위해서는 form태그를 사용해서 전달!

    
    //1. form 객체 생성
    const itemForm = new FormData();

    //2. form 객체에 데이터 추가

    itemForm.append('itemName', itemCategory.itemName );
    itemForm.append('itemPrice', itemCategory.itemPrice );
    itemForm.append('itemIntro', itemCategory.itemIntro );
    itemForm.append('cateCode', itemCategory.cateCode );
    itemForm.append('mainImg', mainImg );
    itemForm.append('subImg', subImg)
    //3. 데이터를 가진 form 객체를 axios 통신에서 자바로 전달한다.
    // axios.post('/admin/insertItem',itemCategory, fileConfig)
    axios.post('/admin/insertItem',itemForm, fileConfig)
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
    <div className='abc'>
      {/* <ul className='side-menu-ul'>
        <li><span>상품관리</span><span><i className="bi bi-chevron-right"></i></span></li>
        <li><span>상품등록</span><span><i className="bi bi-chevron-right"></i></span></li>
        <li><span>카테고리관리</span><span><i className="bi bi-chevron-right"></i></span></li>
      </ul> */}
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
        <div className='input-element'><input type='file' onChange={(e) => {
            //선택한 파일 정보(배열 형태로 가져 옴)
            console.log(e.target.files[0])
            setMainTg(e.target.files[0])
          
          }}/>
          
          
                  </div>
        <div className='input-element'>
            <input type='file' onChange={(e) => {
              setSubImg(e.target.files[0])
            }}/>
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
    </div>
  )
}

export default RegItem
