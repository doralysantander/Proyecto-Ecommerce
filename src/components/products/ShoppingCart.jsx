import React from 'react'
import {useReducer} from 'react'
import { shoppingReducer,shoppinginitialState } from '../reducer/ShoppingReducer'
import ProductItem from './ProductItem';

const ShoppingCart = () => {
    const [state,dispatch]= useReducer(shoppingReducer,shoppinginitialState);
    const{products,cart}=state;
    const addToCart = (id) =>{
      console.log(id)

    }
    const delFromCart = () =>{

    }
    const clearCart = () =>{

    }

  return (
    <div>
        <h2>Carrito compras</h2>
        <h3>Productos</h3>
        <div div className="w-full h-5/6 gap-4 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 rounded-lg">
          {products.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
        </div>
        <h3>Carrito</h3>
        
    </div>
  )
}

export default ShoppingCart