import React from 'react'
import Card from './Card'
//props pase en produclist
const Cart = ({cart,setCart}) => {
  return (
    <div className="absolute w-2/3 h-auto top-10 bg-green-600 md:w-1/4 h-auto  lg:w-1/4 h-auto top-10 right-10">
       <div className=" flex-col justify-center items-center">
        {/* iterar en el componente cart carro cada iteracion es un producto renderizada en card*/}
        {cart.length === 0 ? (<p>0</p>):(cart.map((product =>
        <Card //renderiza en card
        key={product.id} 
        product={product}//el producto con todas especificaciones
        cart={cart}//estado del cart
        setCart={setCart}//funcion modificadora del car
        />)))}
      </div>
    </div>
  )
}

export default Cart