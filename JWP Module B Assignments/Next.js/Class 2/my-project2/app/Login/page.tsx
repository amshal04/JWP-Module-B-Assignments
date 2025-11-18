"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => {

    const router =useRouter()

    function handle_navigate(){
    // router.push method hy or isky under jis path py navigate karna hy wo     path dydyn gy 
        router.push('/Signup')
    }
  return (
    <div>
      <h1>Login Page</h1>
      {/* Button tag ke through navigation */}
      <button onClick={handle_navigate}>Go to Signup Page</button>
    </div>
  );
}

export default Login;