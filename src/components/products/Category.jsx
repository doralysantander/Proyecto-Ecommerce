import React from 'react'
import feijoa from '../../assets/products/feijoas/feijoalogo.png'
import apple from '../../assets/products/apples/applelogo.png' 


const Category = () => {

  //let {id, description,price,image,category }= data;
  //const { id, category} = product;
 
  /*const categories = (product) => {
    //filtrar cada producto id selecciono === al que estoy filtrando
    const product = products.filter((product) => product.category === category);
    < ></Card>
    setCart([...cart, ...product]); //modificar el estado cart agrega abajo de la que esta cargada
  };*/

  return (
    <div className="w-full p-8 flex h-1/5  justify-evenly">
     <img 
            src={apple}
            alt="apple"
            className=" w-32 h-32 sm:w-1/6 h-1/6 md:w-52 h-52 xl:w-52 h-52"
  
           
        />
      <img
            src={feijoa}
            alt="feijoa"
            className="w-36 h-36 sm: w-1/6 h-1/6 md:w-52 h-52 xl:w-52 h-52"
           
        />
       
    </div>
  )
}

export default Category