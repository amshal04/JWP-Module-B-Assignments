
import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Carosuel from './Components/Carosuel/Carosuel.jsx';
import Category from './Components/Category/Category.jsx';
import Flash from './Components/Flash/Flash.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Product from './Components/Product/Product.jsx'; 

const App = () => {
  return (
    <>
      <div className='appWrapper'>
        <Navbar />
        <Carosuel />
        <br />
        <Flash />
        <br />
        <Category />
        <br />
        <Product /> 
        <Footer />
      </div>
    </>
  );
};

export default App;
