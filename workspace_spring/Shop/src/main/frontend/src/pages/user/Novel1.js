import React from 'react'
import '../user/Novel.css'
const Novel1 = () => {
  return (
    <p>
      <div className='novel1'>
        <img className='imgs' src='http://localhost:8080/images/novel1.jpg' />
        <div>
          <h3>Best 1</h3>
          <p>
            <button>MD의 선택</button>
            <button>소득공제</button>
          </p>
          <div></div>
        </div>
      </div>
      <div>
        <img className='imgs' src='http://localhost:8080/images/novel2.jpg' />
      </div>
      <div>
        <img className='imgs' src='http://localhost:8080/images/novel3.jpg' />
        </div>
    </p>
  )
}

export default Novel1