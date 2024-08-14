import axios from 'axios'
import React, { useEffect } from 'react'

const CartList = () => {

  useEffect(() => {
    axios.get('/')
    .then((res) => {})
    .catch((error) => {
      console.log(error)
    })
  })

  


  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td><input type='checkbox' /></td>
            <td>상품 정보</td>
            <td>가격</td>
            <td>수량</td>
            <td>구매가격</td>
            <td>구매일시</td>
            <td>{''}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td><input type='checkbox' /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button type='button'>삭제</button></td>
          </tr>
        </tbody>
      </table>
      <div>총 구매금액 ￦{}</div>
    </div>
  )
}

export default CartList