
import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Carrusel from './components/carrusel/Carrusel';
import Products from './components/products/Products';
import Productslist from './components/products/Productslist';
//import Apple from './components/products/Apple';

//import Carousel from 'react-elastic-carousel';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/carrusel" element={<Carrusel/>}/>
      <Route path="/productos" element={<Products/>}/>
      <Route path="/lista-productos" element={<Productslist/>}/>
  
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
    
  );
}
export default App;
/*<>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
  
  <Navbar />
  <Carrusel/>
  <Products />
  <Productslist />
  <Footer />
    </>
    
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/" element={<Carrusel/>}/>
      <Route path="/" element={<Products/>}/>
      <Route path="/" element={<Productslist/>}/>
      <Route path="/" element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
    
    
    */