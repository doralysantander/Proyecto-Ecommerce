import React from 'react'
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrusel from '../components/carrusel/Carrusel'
import Category from '../components/products/Category';
import Products from '../components/products/Products';
import Cart from '../components/cart/Cart';

//import ShoppingCart from '../components/products/ShoppingCart'



const Landing = () => {
  return (
    <div>
             
            <Carrusel/>
            <Category/>
            <Cart/>
            <Products/>
            


    </div>
  )
}

export default Landing
