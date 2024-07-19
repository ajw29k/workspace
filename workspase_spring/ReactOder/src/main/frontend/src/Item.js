import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Item = () => {
  const [itemList, setItemList] =useState([])
  const {itemNum} =useParams();
  console.log(itemNum)
  useEffect(() => {
    axios
    .get('/itemList')
    .then((res) => {
      setItemList(res.data)
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <div className='container'>
      <div>
        
        <div><ItemList /></div>
        </div>
      <div>
        <table>
          <tbody>
            {itemList.map((item,i) => {
              if(itemNum == item.itemNum){
                return(
                  <>
                    <tr>
                      <td>상품번호</td>
                      <td><input type='text' readOnly value={item.itemNum}/></td>
                    </tr>
                    <tr>
                      <td>상품명</td>
                      <td><input type='text' value={item.itemNum} /></td>
                    </tr>
                    <tr>
                      <td>상품가격</td>
                      <td><input type='text' /></td>
                    </tr>
                    <tr>
                      <td>판매자</td>
                      <td><input type='text' readOnly/></td>
                    </tr>
                    <tr>
                      <td>판매시작일</td>
                      <td><input type='text' readOnly/></td>
                    </tr>
                    <tr>
                      <td>상품설명</td>
                      <td><textarea></textarea></td>
                    </tr>
                  </>
                )
              }
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Item