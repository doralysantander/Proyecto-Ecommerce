import React, { useContext } from "react";
import {CartContext} from '../../context/CartContext'


export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);

   /* Desestructuramos el item para sacar solo la id */
   const { id } = item;

  return (
    <div>
      <img
        src={item.image}
        alt="sss"
        className="w-3/6 h-3/6 overflow-hidden aspect-square"
      />
      

    </div>
  )
}

