import React from 'react'
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrusel from '../components/carrusel/Carrusel'
import Category from '../components/products/Category';
//rutas nuevas 

import Cart from '../components/Cart/Cart';
import {CartProvider} from '../context/CartContext'
import Products from'../components/products/Products';


const Landing = () => {
  return (

    <>      
         
            <Carrusel/>
            <Category/> 
            <CartProvider>
            <Cart/>
            <Products/>
          </CartProvider>
             

    </>
  )
}

export default Landing

