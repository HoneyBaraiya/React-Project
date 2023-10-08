import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor]=useState('');
  const [error,setError]=useState(false);
  const [list,setList]=useState([])

  const getInput=(e)=>{
    e.preventDefault();
    try{
      let colors=new Values(color).all(10);
      setList(colors);
    }
    catch(err){
      setError(true);
      console.log(err);
    }
  }
  return (
    <>
    <section className='container'>
      <h3>Color generator</h3>
      <form onSubmit={getInput}>
        <input type='text'
           name='txtColorInput'
           id='txtColorInput'
           value={color}
           onChange={(e)=>setColor(e.target.value)}
           placeholder='#f15025'
           className={`${error?'error':null}`}
           />
        <button type='submit' className='btn'>generate</button>
      </form>
    </section>
    <section className='colors'>
      {
        list.map((list_color,index)=>{
          return(
            <SingleColor key={index} {...list_color} index={index}/>
          )
        })
      }
    </section>
    </>
  )
}

export default App
