import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true)
  const [data,setData]=useState([]);
  const [value,setValue]=useState(0);
  // const [companyData,setCompanyData]=useState([]);
  

  const fetchURL=async()=>{
    try{
      var res=await fetch(url);
      res=await res.json();
      setData(res);  
      setLoading(false);   
    }
    catch(err){
      console.log(err);
    }
  }
  
  useEffect(()=>{
    fetchURL();
  },[]);
  if(loading){
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, title } = data[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>Exprience</h2>
      </div>
      <div className='underline'></div>
      {/*  button container*/}
      <div className='jobs-center'>
        <div className='btn-container'>
          {
            data.map((job,index)=>{
              return(
                <button key={job.id}
                  className={`job-btn ${index === value && 'active-btn'}`} 
                  onClick={()=>setValue(index)}
                >
                  {job.company}
                </button>
              )
            })
          }
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      
      
    </section>
   
  )
}

export default App
