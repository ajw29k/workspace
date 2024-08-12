import React from 'react'

const InsertItem = () => {
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>상품명</td>
            <td><input type='text' onChange={() => {}}/></td>
          </tr>
          <tr>
            <td>상품가격</td>
            <td><input type='text' onChange={() => {}}/></td>
          </tr>
          <tr>
            <td>판매자</td>
            <td><input type='text' onChange={() => {}}/></td>
          </tr>
          <tr>
            <td>상품설명</td>
            <td><textarea onChange={() => {}}></textarea></td>
          </tr>
        </tbody>
      </table>
      <button type='button' onClick={() => {}}> 등록 </button>
    </div>
  )
}

export default InsertItem