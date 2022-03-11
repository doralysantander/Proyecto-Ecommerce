import React from 'react'

import {ProductsData} from '../../Data/productsdata'

const Products = () => {
  return (
    <div>
      {ProductsData.map((product,i)=>(
        <div key={i}>

       <img
        src={product.image}
        alt="fallo la carga"
        className="w-3/6 h-3/6 overflow-hidden aspect-square"
      />
      <p>{product.description}</p>
      <span>valor: ${product.price} Libra</span>
      <div>
      <button className="bg-green-900 px-2 py-2 rounded-md text-zinc-100 font-bold" onClick={()=>console.log(product)}>AGREGAR</button>
      </div>

          </div>

      ))
    }

    </div>
  )
}

export default Products