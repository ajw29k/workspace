import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Modal = ({content , setIsShow}) => {
  const modalContainer = useRef();
  
  const navigate = useNavigate()
  return (
    <div className={'modal-container show'} ref={modalContainer}>
      <div className='modal'>
        <div className='modal-header'><span onClick={() => {
          modalContainer.current.className = 'modal-container'
        setTimeout(() => {
          setIsShow(false)
          
        }, 300);
        }}>
          <i className="bi bi-x-lg"></i>
          </span></div>
        <div className='modal-content'>
        {
          content()
        }
        </div>
        <div className='modal-footer'>
        <button type='button' className='btn' 
        onClick={() => {
          modalContainer.current.className = 'modal-container'
          setTimeout(() => {
            setIsShow(false)
            
          }, 300);
          navigate('/login')
        }}>확인</button>
      </div>
    </div>
  </div>
  )
}

export default Modal