import React from 'react'
import {useCart} from 'react-use-cart'

const Cart = () => {
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return <h1 className="text-center">Su carrito esta vacio</h1>
  return (
      <section className="py-4">
        <div>
            <div>
                <h5>Cart({totalUniqueItems}) Total:items({totalItems}) </h5>

            </div>
            
        </div>
      </section>
    
  )
}

export default Cart