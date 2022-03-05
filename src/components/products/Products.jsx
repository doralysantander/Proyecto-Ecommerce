import React from 'react'
import apple from '../../assets/carrusel/feijoalogo.jpg'
import feijoa from '../../assets/carrusel/apple-3.jpg'
import avocado from '../../assets/carrusel/apple-4.jpg'



const Products = () => {

  return (
    <div>
     <img
            src={apple}
            alt="apple"
            className=""
        />

      <img
            src={feijoa}
            alt="feijoa"
            className=""
        />
        <img
            src={avocado}
            alt="avocado"
            className=""
        />


    </div>
  )
}

export default Products