import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({item}) => {
  const {id,name,image,info,glass}=item;
  return (
    <article className='cocktail'>
      <div className='img-container'>
         <img src={image} alt="image"/>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>details</Link>
      </div>
    </article>
  )
}

export default Cocktail