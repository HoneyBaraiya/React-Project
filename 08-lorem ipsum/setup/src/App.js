import React, { useState } from 'react';
import data from './data';
function App() {
  const [dataRecords,setDataRecords]=useState([]);
  const [count,setCount]=useState(0);

  const getData=(e)=>{
    e.preventDefault();
    let newCount=parseInt(count);
    if(newCount<=1)
      newCount=1;
    if(newCount>=data.length)
      newCount=data.length;
    setDataRecords(data.slice(0,newCount));
    
  }

  return (
      <section className='section-center'>
        <h3>tired to boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={getData}> 
            <label htmlFor='amount'>Paragraphs:</label>
            <input type='number' id="amount" name="amount" value={count} onChange={(e)=>{setCount(e.target.value)}}/>
            <button type='submit' className='btn'>Generate</button>
        </form>
       
        <article className='lorem-text'>
        {dataRecords.map((item, index) => {
           return<p key={index}>{item}</p>;
        })}
      </article>
      
      </section>
    )
}

export default App;
