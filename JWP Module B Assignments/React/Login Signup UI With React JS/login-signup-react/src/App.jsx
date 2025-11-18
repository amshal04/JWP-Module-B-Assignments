import React, { useState } from 'react';
import Signup from './Screens/Signup/Signup.jsx';
import Login from './Screens/Login/Login.jsx';


function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <>
      {showLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signup toggleForm={toggleForm} />
      )}
    </>
  );
}
export default App
