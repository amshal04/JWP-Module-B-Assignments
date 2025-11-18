// // src/pages/Dashboard.jsx
// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutUser } from "../Store/Slice/authSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import CustomDrawer from "../Screen/Drawer";

// const Dashboard = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     toast.info("Logged out successfully 👋");
//     navigate("/login");
//   };

//   return (

//     <>
//     <CustomDrawer/>
  
//           </>
//   );
// };

// export default Dashboard;
















// // src/pages/Dashboard.jsx
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutUser } from "../Store/Slice/authSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Drawer from "../Screen/Drawer";

// const Dashboard = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     toast.info("Logged out successfully 👋");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
//       {/* Sidebar */}
//       <Drawer />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Navbar */}
//         <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between shadow-sm">
//           {/* Flowbite Breadcrumb */}
//           <nav className="flex" aria-label="Breadcrumb">
//             <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
//               <li className="inline-flex items-center">
//                 <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
//                   <svg
//                     className="w-3 h-3 me-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
//                   </svg>
//                   Home
//                 </span>
//               </li>
//               <li aria-current="page">
//                 <div className="flex items-center">
//                   <svg
//                     className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 6 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 9 4-4-4-4"
//                     />
//                   </svg>
//                   <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
//                     Dashboard
//                   </span>
//                 </div>
//               </li>
//             </ol>
//           </nav>

//           {/* Logout */}
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg"
//           >
//             Logout
//           </button>
//         </nav>

//         {/* Content */}
//         <main className="p-6">
//           <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
//             Welcome, {user?.name || "User"} 🎉
//           </h2>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


























// // src/pages/Dashboard.jsx
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutUser } from "../Store/Slice/authSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Drawer from "../Screen/Drawer";
// import { HiOutlineLogout } from "react-icons/hi";


// const Dashboard = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Sidebar state
//   const [isOpen, setIsOpen] = useState(true);

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     toast.info("Logged out successfully 👋");
//     navigate("/login");
//   };

//   // Toggle Drawer
//   const toggleDrawer = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
//       {/* Sidebar */}
//       {isOpen && <Drawer />}

//       {/* Main Content */}
//       <div
//         className={`flex-1 flex flex-col transition-all duration-300 ${
//           isOpen ? "sm:ml-64" : "sm:ml-0"
//         }`}
//       >
//         {/* Top Navbar */}
//         <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between shadow-sm">
//           {/* Left Side: Hamburger + Dashboard title */}
//           <div className="flex items-center gap-3">
//             {/* Hamburger Button */}
//             <button
//               onClick={toggleDrawer}
//               className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-blue-600"
//             >
//               ☰
//             </button>

//             {/* Dashboard Title */}
//             <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
//               Dashboard
//             </span>
//           </div>

//           {/* Logout */}
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg"
//           >
//             <HiOutlineLogout className="w-5 h-5" />
//             Logout
//           </button>
//         </nav>

//         {/* Content */}
//         <main className="p-6">
//           <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
//             Welcome, {user?.name || "User"} 🎉
//           </h2>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;























// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Store/Slice/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Drawer from "../Screen/Drawer";
import { HiOutlineLogout } from "react-icons/hi";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.info("Logged out successfully 👋");
    navigate("/login");
  };

  // Toggle Drawer (Dashboard click/hover)
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      {isOpen && <Drawer onClose={() => setIsOpen(false)} />}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isOpen ? "sm:ml-64" : "sm:ml-0"
        }`}
      >
        {/* Top Navbar */}
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between shadow-sm">
          {/* Left Side: Dashboard button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDrawer}
              onMouseEnter={() => setIsOpen(true)} // ✅ Hover se bhi open hoga
              className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 bg-gray-200 dark:bg-gray-700 rounded-lg"
            >
              Dashboard
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg"
          >
            <HiOutlineLogout className="w-5 h-5" />
            Logout
          </button>
        </nav>

        {/* Content */}
        <main className="p-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            Welcome, {user?.name || "User"} 🎉
          </h2>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
