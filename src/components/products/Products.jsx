import React from 'react'
import feijoa from '../../assets/products/feijoas/feijoalogo.png'
import apple from '../../assets/products/apples/applelogo.png' 


const Products = () => {
 

  return (
    <div className="w-screen flex h-1/5  justify-evenly">
     <img 
            src={apple}
            alt="apple"
            className="w-1/4 h-1/4 md:w-2/12 h-2/12 xl:w-2/12 h-2/12"
          
           
        />
      <img
            src={feijoa}
            alt="feijoa"
            className="w-1/4 h-1/4 md:w-2/12 h-2/12 xl:w-2/12 h-2/12"
           
        />
       
    </div>
  )
}

export default Products