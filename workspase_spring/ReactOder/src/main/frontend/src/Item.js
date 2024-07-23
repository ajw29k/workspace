import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Item = () => {
  const [itemList, setItemList] =useState([])
  useEffect(() => {
    axios.get('itemList').then((E) => {
      setItemList(E)
    }).catch((e) => {
      console.log(e)
    })
  })
  

  return (
    <div className='container'>
      <div>
        
        <div><ItemList /></div>
        </div>
      <div>
        <table>
          <tbody>
              {setItemList       }
                
                  <>
                    <tr>
                      <td>상품번호</td>
                      <td><input type='text' readOnly value={''}/></td>
                    </tr>
                    <tr>
                      <td>상품명</td>
                      <td><input type='text' value={''} /></td>
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
                
              
            
          
        
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Item