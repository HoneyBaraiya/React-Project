import React,{useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import {AppContext} from './context'

const Modal = () => {
  const {closeModel,isOpenModel}=useContext(AppContext);
  return (
    <div className={`${isOpenModel?'modal-overlay show-modal':'modal-overlay'}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
      
        <button className='close-modal-btn' onClick={closeModel}>
          <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
