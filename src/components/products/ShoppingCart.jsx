import React from 'react'
import {useReducer} from 'react'
import { shoppingReducer,shoppinginitialState } from '../reducer/ShoppingReducer'
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import {TYPES} from '../actions/ShoppingAction'

const ShoppingCart = () => {
    const [state,dispatch]= useReducer(shoppingReducer,shoppinginitialState);
    const{products,cart}=state;
    const addToCart = (id) =>{
      //desencadenar la funcionalidad useReducer
      dispatch({type:TYPES.ADD_TO_CART,payload:id})
      //console.log(id)

    }
    const delFromCart = (id, all = false) =>{
      console.log(id,all);
      if (all) {
        dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
      } else {
        dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
      }
    };

    const clearCart = () =>{
      dispatch({type:TYPES.CLEAR_CART})
     
    }

  return (
    <div>

        <div div className="w-full h-5/6 gap-4 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 rounded-lg">
          {products.map((product) => 
          (<ProductItem key={product.id} data={product} addToCart={addToCart}/>
          
          ))}
        </div>
      
        <div className="absolute w-2/3 h-auto top-10 bg-neutral-300 md:w-1/4 h-auto  lg:w-1/4 h-auto top-40 right-10"> 
        <div className="flex  flex-col justify-center">
        
         

         {/*arreglo que trae los items del carro */} 
        {cart.map((item,index)=> (
        <CartItem key={index} data={item} delFromCart={delFromCart}/>
            ))
          }
          <button className="bg-green-900 px-2 py-2 rounded-md  text-zinc-100 font-bold" onClick={clearCart}>Limpiar carrito</button>
        </div>
        </div>
        
    </div>
  )
}

export default ShoppingCart

