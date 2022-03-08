
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Carrusel from './components/carrusel/Carrusel';
import Products from './components/products/Products';
import Productslist from './components/products/Productslist';
//import Apple from './components/products/Apple';

//import Carousel from 'react-elastic-carousel';
//import {Route as Router} from 'react-router-dom';

function App() {
  return (
    <>
  
     <Navbar />
     <Carrusel/>
    <Products />
     <Productslist />
     <Footer />
    
    </>
    
  );
}

export default App;
