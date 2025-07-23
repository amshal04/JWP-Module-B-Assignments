import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './Screens/Products';
import SingleProduct from './Screens/SingleProduct';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default App;
