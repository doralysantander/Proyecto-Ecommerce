//import "./card.css";
import React from 'react'
const Card = (props) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      
       <img src={props.image} alt={props.img} className="w-4/5 h-4/5 overflow-hidden aspect-square" />
        <p>{props.description}</p>
        <span>valor: ${props.price} Libra</span>

        <div className="flex gap-1 ">
            <button className="bg-green-900 px-1.5 py-1.5 w-8 h-8 text-center rounded-2xl text-zinc-100 font-bold">
              +
              </button>
              <input type="text" size="1" className="border-green-700 px-1.5 py-1.5 text-zinc-900 font-bold"/>
              <button className="bg-green-900 px-1.5 py-1.5 w-8 h-8 text-center rounded-2xl text-zinc-100 font-bold">
                -
              </button>

              <button className="bg-green-900 px-1.5 py-1.5 rounded-md text-zinc-100 font-bold" >
                Comprar
              </button>

        </div>
         

    </div>
  )
}

export default Card

/*

import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
        <picture className='Character-image'><img src={props.image} alt={props.name} /></picture>
        <h3 className='Name'>{props.name}</h3>
        <span className='House'>{props.house}</span>
        <span>{props.colorPelo}</span>
    </div>
  )
}

export default Card
*/