import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchterm}=useGlobalContext();
  const searchValue=React.useRef('');

  const searchCoctail=()=>{
    setSearchterm(searchValue.current.value)
  }

  useEffect(()=>{
    searchValue.current.focus();
  },[])
  
  const handlesubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handlesubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input type='text' id='name' ref={searchValue} onChange={searchCoctail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
