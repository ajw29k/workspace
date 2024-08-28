import { useEffect, useState } from 'react'
import './SalesList.css'
import axios from 'axios'

const SalesList = () => {
  // 데이터 저장할 변수
  const [salesList, setSalesList] = useState([])
  // 마운트될때 불러오기
  useEffect(()=>{
    axios
    // 자바에 데이터 요청
    .get(`/sales/salesList`)
    .then((res)=> {
      //받아온 데이터 변수에 저장
      setSalesList(res.data)
      console.log(res.data)
    })
    .catch((error)=>{console.log(error)
    })
  },[])

  return (
    <div>
      <table className="list-table">
        <colgroup>
          <col width={'10%'}/>
          <col width={'10%'}/>
          <col width={'20%'}/>
          <col width={'20%'}/>
          <col width={'10%'}/>
          <col width={'10%'}/>
          <col width={'15%'}/>
        </colgroup>
        <thead>
          <tr>
            <td rowSpan={2}>No.</td>
            <td colSpan={4}>구매자정보</td>
            <td colSpan={2}>차량정보</td>
          </tr>
          <tr>
            <td>구매자명</td>
            <td>연락처</td>
            <td>구매일</td>
            <td>색상</td>
            <td>모델명</td>
            <td>금액</td>
          </tr>
        </thead>
        <tbody>
          {
            salesList.map((sales, i) => {
              return(
                <tr key={i}>
                  <td>{salesList.length-i}</td>
                  <td>{sales.buyer}</td>
                  <td>{sales.tell}</td>
                  <td>{sales.buyDate}</td>
                  <td>{sales.color}</td>
                  <td>{sales.carVO.modelName}</td>
                  <td>{sales.carVO.price}</td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default SalesList