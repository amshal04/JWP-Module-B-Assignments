// "use client";
// import Link from 'next/link';
// import { useRouter } from 'next/navigation'
// import React from 'react'

// const Signup = () => {

//     const router =useRouter()

//     function handle_navigate(){

//         router.push('/Login')
//     }
//   return (
//     <div>
//       <h1>Signup Page</h1>

//       {/* Button tag ke through navigation */}
//       <button onClick={handle_navigate}>Go to Login Page</button>
//     </div>
//   )
// }

// export default Signup












"use client";
import Link from 'next/link';
import React from 'react';

const Signup = () => {
  return (
    <div>
      <h1>Signup Page</h1>

      {/* Link tag ke through navigation without Styling */}
      <Link href="/Login">
        Go to Login Page
      </Link>

    {/* Link tag ke through navigate with CSS ya Tailwind Styling */}
      {/* <Link href="/Login" className="bg-blue-600 text-white px-4 py-2 rounded">
      Go to Login Page
      </Link> */}
    </div>
  );
}

export default Signup;
