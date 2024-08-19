import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  const navigate = useNavigate();
  const [carList, setCarList] = useState([])
  const [car ,setCar] = useState({
    modelName : '',
    price : 0,
    manufacturer : '현대'
  })
  useEffect(() => {
    axios.get('/car/list')
    .then((res) => {
      setCarList(res.data)

    })
    .catch((error) => {
      console.log(error)
    })
  },[])
  function changeCar(e){
    setCar({...car,
    [e.target.name] : e.target.value
    })
  }
  function insertCar(){
    axios.post('/car/insert', car)
    .then((res) => {
    window.location.reload()
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className='carMenu'>
      <div className='insertCaR'>
        <div >-차량 등록</div>
        <div>
          제조사 <select name='manufacturer' value={car.manufacturer} onChange={(e) => {
            changeCar(e)
          }}>
            <option value='현대'>현대</option>
            <option value='기아'>기아</option>
            <option value='쌍용'>쌍용</option>
          </select>
          모델명 <input type='text' name='modelName' onChange={(e) => {
            changeCar(e)
          }}/> 
          차량가격 <input type='tel' name='price' onChange={(e) => {
            changeCar(e)
          }}/>
        </div>
        <div><button type='button' onClick={() => {
          insertCar()
          setCar([])
        }}>차량등록</button></div>
      </div>
      <div>
        <div className='carList'>-차량목록</div>
        <div>
          <table className='tableCar'>
            <colgroup>
              <col width= '15%'/>
              <col width= '15%'/>
              <col width= '*'/>
            </colgroup>
            <thead>
              <tr>
                <td>모델번호</td>
                <td>모델명</td>
                <td>제조사</td>
              </tr>
            </thead>
            <tbody>
              {
                carList.map((car ,i) => {
                  return(
                    <tr key={i}>
                      <td>{car.modelNum}</td>
                      <td>{car.modelName}</td>
                      <td>{car.manufacturer}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Menu