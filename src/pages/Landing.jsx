import React from 'react'
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrusel from '../components/carrusel/Carrusel'
import Products from '../components/products/Products';
//import Productslist from '../components/products/Productslist';
import ShoppingCart from '../components/products/ShoppingCart'


const Landing = () => {
  return (
    <div>

            <Carrusel/>
            <Products/>
            <ShoppingCart/>


    </div>
  )
}

export default Landing
