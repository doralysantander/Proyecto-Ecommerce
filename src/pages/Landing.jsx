import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './components/products/Products';
import Productslist from './components/products/Productslist';
import Carrusel from './components/carrusel/Carrusel';

const Landing = () => {
  return (
    <div>
         <BrowserRouter>
         <Routes>
            <Carrusel/>
            <Products/>
            <Productslist/>
        </Routes>
        </BrowserRouter>

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