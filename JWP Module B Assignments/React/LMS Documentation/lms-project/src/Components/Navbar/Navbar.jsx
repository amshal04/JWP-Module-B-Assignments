// import React from 'react'

// const Navbar = () => {
//   return (
//     <>

//     <header class="text-gray-600 body-font">
//   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span class="ml-3 text-xl">Tailblocks</span>
//     </a>
//     <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <a class="mr-5 hover:text-gray-900">First Link</a>
//       <a class="mr-5 hover:text-gray-900">Second Link</a>
//       <a class="mr-5 hover:text-gray-900">Third Link</a>
//       <a class="mr-5 hover:text-gray-900">Fourth Link</a>
//     </nav>
//     <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
//       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg>
//     </button>
//   </div>
// </header>

//     </>
//   )
// }

// export default Navbar




































// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="text-gray-600 body-font border-b">
//       <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
//         {/* Logo */}
//         <a className="flex title-font font-medium items-center text-gray-900">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl">Tailblocks</span>
//         </a>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex md:items-center md:space-x-5">
//           <a className="hover:text-gray-900">First Link</a>
//           <a className="hover:text-gray-900">Second Link</a>
//           <a className="hover:text-gray-900">Third Link</a>
//           <a className="hover:text-gray-900">Fourth Link</a>
//         </nav>

//         {/* Desktop Button */}
//         <button className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 hover:bg-gray-200 rounded text-base">
//           Button
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-4 h-4 ml-1"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </button>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden inline-flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Drawer */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t">
//           <nav className="flex flex-col p-4 space-y-2">
//             <a className="hover:text-gray-900">First Link</a>
//             <a className="hover:text-gray-900">Second Link</a>
//             <a className="hover:text-gray-900">Third Link</a>
//             <a className="hover:text-gray-900">Fourth Link</a>
//             <button className="bg-gray-100 border-0 py-1 px-3 hover:bg-gray-200 rounded text-base text-left">
//               Button
//             </button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;













// import React from 'react'

// const Navbar = () => {
//   return (
//     <>
    

// <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
//       <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
//       <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//   </a>
//   <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
//       <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>
  
//     </>
//   )
// }

// export default Navbar

































import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="text-gray-600 body-font border-b">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold">LMS</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:items-center md:space-x-10">
            <a className="hover:text-gray-900">Students</a>
            <a className="hover:text-gray-900">Teachers</a>
            <a className="hover:text-gray-900">Subjects</a>
            <a className="hover:text-gray-900">School</a>
            <a className="hover:text-gray-900">Syllabus</a>
            <a className="hover:text-gray-900">Class</a>
            <a className="hover:text-gray-900">Fees</a>
            <a className="hover:text-gray-900">Admission</a>
            <a className="hover:text-gray-900">Exam</a>

          </nav>

          {/* Desktop Button */}
          <button className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 hover:bg-gray-200 rounded text-base">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden inline-flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-b from-black/60 to-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-2xl rounded-r-xl z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col p-4 space-y-3">
          <a className="flex items-center p-2 rounded hover:bg-gray-100">
            <svg
              className="w-5 h-5 mr-3 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"></path>
            </svg>
            Students 
          </a>
          <a className="flex items-center p-2 rounded hover:bg-gray-100">
            <svg
              className="w-5 h-5 mr-3 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            Second Link
          </a>
          <a className="flex items-center p-2 rounded hover:bg-gray-100">
            <svg
              className="w-5 h-5 mr-3 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 4v16m8-8H4"></path>
            </svg>
            Third Link
          </a>
          <a className="flex items-center p-2 rounded hover:bg-gray-100">
            <svg
              className="w-5 h-5 mr-3 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            Fourth Link
          </a>

          {/* Drawer Button */}
          <button className="flex items-center p-2 mt-4 bg-gray-100 hover:bg-gray-200 rounded">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            Button
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
