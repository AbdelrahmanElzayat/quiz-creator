import React from 'react'
import './NumLi.css'
const NumLi = (props) => {
  return (
    <div className='numLi'><span>{props.num}</span></div>
  )
}

export default NumLi