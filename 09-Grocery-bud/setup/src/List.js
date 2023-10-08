import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,updateRecord,deleteRecord}) => {
  return(
    <div className='grocery-list'>
      {
        items.map((record)=>{
          const {id,title}=record;
          return(
            <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn' onClick={()=>updateRecord(id)}><FaEdit/></button>
              <button type='button' className='delete-btn' onClick={()=>deleteRecord(id)}><FaTrash/></button>
            </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default List
