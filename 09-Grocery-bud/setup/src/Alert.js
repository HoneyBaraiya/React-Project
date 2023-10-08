import React, { useEffect } from 'react'

const Alert = ({msg,type,removeAlter,groceryList}) => {
 
  {
    useEffect(()=>{
      const timeout=setTimeout(()=>{removeAlter()},3000);
      return()=>clearTimeout(timeout);
    },[groceryList])
  }
  return (
    <p className={`alert alert-${type}`}>
      {msg}
    </p>
  )
}

export default Alert
