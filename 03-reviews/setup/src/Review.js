import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  const {id,name,job,image,text}=people[index];
  

  const checkIndex=(number)=>{
    if(number<0)
      number=people.length-1;
    else if(number>people.length-1)
      number=0;
    return number;
  }

  const getNextrecord=(index)=>{
    setIndex((index)=>{
      let newIndex=index+1;
      return checkIndex(newIndex);
    })
  }
  const getPrevRecod=()=>{
    setIndex((index)=>{
      let newIndex=index-1;
      return checkIndex(newIndex) ;
    })
  }
  
  const randomPerson=()=>{
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  }
  return (
    <article className='review'>
      <div className='img-container'>
          <img src={image} alt={name} className='person-img'/>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={getPrevRecod}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={getNextrecord}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>surprise review</button>
    </article>
  );
};

export default Review;
