import React from 'react'

const CartItem = ({data,delFromCart}) => {//destrucuture
  let {id, description,price,image,quantity, }= data;
  //console.log(price)
  
  return (
    <div className="border flex flex-col justify-center items-center border-lime-800">
       <img
        src={image}
        alt="sds"
        className="w-3/6 h-3/6 overflow-hidden aspect-square"
      />
      <p>{description}</p>
      <span>valor: ${price}x{quantity} Libra</span>
      <div className="flex  justify-center gap-x-8 gap-y-8 p-2">
      <button className="bg-green-900 px-2 py-2 rounded-md text-zinc-100 font-bold" onClick={()=>delFromCart(id)}>Eliminar Producto</button>
      <button className="bg-green-900 px-2 py-2 rounded-md text-zinc-100 font-bold" onClick={()=>delFromCart(id,true)}>Eliminar Todos</button>
      </div>
  

    </div>
  )
}

export default CartItem