import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Origin = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);
  //+1 함수
  const addNum = () => {
    setNum(num+1);
  }

  //-1 함수
  const subNum = () => {
    setNum(num-1);
  }
  //-1 함수
  const resetNum = () => {
    setNum(0);
  }
  return (
    <div>
      <h3>카운터앱(기존방식)</h3>
      <h3>{num}</h3>
      <div>
        <button type='button' onClick={() => addNum()}>+1</button>
        <button type='button' onClick={() =>subNum()}>-1</button>
        <button type='button' onClick={() =>resetNum()}>reset</button>
      </div>
      <div onClick={() => {navigate('/')}}>d</div>
    </div>
  )
}

export default Origin