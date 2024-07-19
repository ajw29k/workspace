import React from 'react'
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate()
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>주문상품</td>
            <td>
              <select>
                <option></option>
              </select>
            </td>
          </tr>
          <tr>
            <td>상품단가</td>
            <td><input type='text' readonly /></td>
          </tr>
          <tr>
            <td>주문자</td>
            <td><input type='text' /></td>
          </tr>
          <tr>
            <td>주문 수량</td>
            <td><input type='text' /></td>
          </tr>
        </tbody>
      </table>
      <button type='button' onClick={() => {}} > 주문하기 </button>
    </div>

  )
}

export default Order;