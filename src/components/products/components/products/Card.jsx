
import React from 'react'
const Card = (props) => {
  return (
    <div>
        <picture ><img src={props.image} alt={props.img} /></picture>
        <p>{props.description}</p>
        <span>{props.price}</span>
       
    </div>
  )
}

export default Card