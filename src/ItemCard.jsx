import React from 'react'
import {useCart} from 'react-use-cart'


const ItemCard = (props) => {
    const {addItem} = useCart();

  return (
    <>
    <div className="border flex flex-col justify-center items-center border-lime-800">
    <div  className=" w-full border flex flex-col justify-center items-center ">
       <img
        src={props.image}
        alt="sds"
        className="w-3/6 h-3/6 overflow-hidden aspect-square"
      />
        <p>{props.description}</p>
        <span>valor: ${props.price} Libra</span>
        <p>{props.desc}</p>
     
      <div className="flex justify-center align-center">
      <button className="bg-green-900 cursor-pointer hover:bg-yellow-500 px-2 py-2 rounded-md text-zinc-100 font-bold" onClick={()=>addItem(props.item)}>AGREGAR</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default ItemCard
/* 

onClick={()=>AddItemToCart(product)}
<div className="border flex flex-col justify-center items-center border-lime-800">
       <img
        src={props.image}
        alt="sds"
        className="w-3/6 h-3/6 overflow-hidden aspect-square"
      />
      <p>{props.description}</p>
      <span>valor: ${props.price} Libra</span>
      <span>valor: ${props.desc} Libra</span>
      <div>
      <button className="bg-green-900 px-2 py-2 rounded-md text-zinc-100 font-bold" >AGREGAR</button>
      </div>
  
    </div>*/