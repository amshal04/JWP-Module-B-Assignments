import React, { useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config/Firebase';


const LoginSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");


const signup = (e) => {
  e.preventDefault();

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
    // ..
  });
};

const login = () => {
signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
}
  return (
    <div>
      <h1>Signup Form</h1>
      <form onSubmit={signup}>
        <input
         onChange={(e) => setName(e.target.value)}
         type="text"
         placeholder='Enter name' />
        <br /> 
        <br /> 
        <input
         onChange={(e) => setEmail(e.target.value)}
         type="text"
         placeholder='Enter email' />
        <br /> 
        <br /> 
        <input 
         onChange={(e) => setPassword(e.target.value)}
         type="password"
         placeholder='Enter password' />
        <br />
        <br />
        <button>Signup</button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <input
      onChange={(e) => setloginEmail(e.target.value)}
      type="text"
      placeholder='Enter email' />
      <br />
      <br />
      <input
      onChange={(e) => setloginPassword(e.target.value)}
      type="password"
      placeholder='Enter password' />
      <br />
      <br />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default LoginSignup


