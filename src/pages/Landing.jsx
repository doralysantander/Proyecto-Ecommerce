import React from 'react'
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrusel from '../components/carrusel/Carrusel'
import Products from '../components/products/Products';
import Productslist from '../components/products/Productslist';


const Landing = () => {
  return (
    <div>

            <Carrusel/>
            <Products/>
            <Productslist/>


    </div>
  )
}

export default Landing
/*<Route path="/" element={<Carrusel/>}/>*/
/*

 <div>
         <BrowserRouter>
         <Routes>
            <Carrusel/>
            <Products/>
            <Productslist/>
        </Routes>
        </BrowserRouter>

    </div>*/