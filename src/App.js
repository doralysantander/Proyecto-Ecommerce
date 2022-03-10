
import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Carrusel from './components/carrusel/Carrusel';
import Products from './components/products/Products';
//import Productslist from './components/products/Productslist';
import Landing from './pages/Landing'

//import Apple from './components/products/Apple';

//import Carousel from 'react-elastic-carousel';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShoppingCart from './components/products/ShoppingCart';

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Landing/>}/>
      <Route path="/carrusel" element={<Carrusel/>}/>
      <Route path="/productos" element={<Products/>}/>
      <Route path="/lista-productos" element={<ShoppingCart/>}/>
      <Route path="*" element={<div>404 Not Found!</div>}/>
  
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}
export default App;
