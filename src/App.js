
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Carrusel from './components/carrusel/Carrusel';
import Products from './components/products/Products';
//import Carousel from 'react-elastic-carousel';
//import {Route} from 'react-router-dom';

function App() {
  return (
    <>
    
     <Navbar />
     <Carrusel/>
    <Products />
     <Footer />
    </>
  );
}

export default App;
