import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {
  const bcg=rgb.join(',')
  console.log(bcg)
  return (
    <article className={`color`} style={{backgroundColor:`rgb(${bcg})`}}>
      <p className='percent-value'>{weight}%</p>
    </article>
  )
}

export default SingleColor
