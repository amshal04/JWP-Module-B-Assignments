import React from 'react';
import { Route, Routes } from "react-router-dom";               
import LoginSignup from './Screens/LoginSignup';
import DatabaseScreen from "./Screens/DatabaseScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route path="/database" element={<DatabaseScreen />} />
    </Routes>
      
  );
};

export default App
