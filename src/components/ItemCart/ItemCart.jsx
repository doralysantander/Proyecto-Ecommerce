import React, { useContext } from "react";
import {CartContext} from '../../context/CartContext'


export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);

   /* Desestructuramos el item para sacar solo la id */
   const { id } = item;

  return (
    <div className="border  flex flex-col justify-center items-center ">
      <img
        src={item.image}
        alt="sss"
        className="w-3/6 h-3/6 overflow-hidden aspect-square"
      />
      <p>{item.description}</p>
      <span>Cantidad: {item.amount}</span>
      <span>valor: ${item.price} Libra</span>
     
      <div>
        <button className="bg-green-900 px-2 py-2 rounded-md text-zinc-100 font-bold" onClick={() => AddItemToCart(item)}>Agregar</button>
        <button className="bg-green-900 px-2 py-2 rounded-md text-zinc-100 font-bold" onClick={() => DeleteItemToCart(id)}>Eliminar</button>
      </div>

     
      

    </div>
  )
}

/*<div> <p>Totaly: ${item.amount * item.price}</p></div> */