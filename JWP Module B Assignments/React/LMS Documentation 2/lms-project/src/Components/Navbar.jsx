// // // src/components/Navbar.jsx
// // import React from "react";
// // import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { logoutUser } from "../Store/Slice/authSlice";

// // const Navbar = () => {
// //   const { user } = useSelector((state) => state.auth);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     dispatch(logoutUser());
// //     navigate("/login");
// //   };

// //   return (
// //     <AppBar position="static" sx={{ backgroundColor: "#2a9b42" }}>
// //       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
// //         <Typography
// //           onClick={() => navigate("/dashboard")}
// //           variant="h6"
// //           sx={{ cursor: "pointer", fontWeight: "bold" }}
// //         >
// //           Dashboard
// //         </Typography>

// //         <Box>
// //           {!user ? (
// //             <>
// //               <Button
// //                 component={Link}
// //                 to="/"
// //                 sx={{
// //                   color: "white",
// //                   mr: 2,
// //                   borderRadius: "20px",
// //                   "&:hover": { backgroundColor: "#24913a" },
// //                 }}
// //               >
// //                 Signup
// //               </Button>
// //               <Button
// //                 component={Link}
// //                 to="/login"
// //                 sx={{
// //                   color: "white",
// //                   borderRadius: "20px",
// //                   "&:hover": { backgroundColor: "#24913a" },
// //                 }}
// //               >
// //                 Login
// //               </Button>
// //             </>
// //           ) : (
// //             <>
// //               <Button
// //                 component={Link}
// //                 to="/dashboard"
// //                 sx={{
// //                   color: "white",
// //                   mr: 2,
// //                   borderRadius: "20px",
// //                   "&:hover": { backgroundColor: "#24913a" },
// //                 }}
// //               >
// //                 Dashboard
// //               </Button>
// //               <Button
// //                 onClick={handleLogout}
// //                 sx={{
// //                   color: "white",
// //                   borderRadius: "20px",
// //                   "&:hover": { backgroundColor: "#24913a" },
// //                 }}
// //               >
// //                 Logout
// //               </Button>
// //             </>
// //           )}
// //         </Box>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Navbar;



























// // src/components/Navbar.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutUser } from "../Store/Slice/authSlice";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate("/login");
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a
//           href="#"
//           className="flex items-center space-x-3 rtl:space-x-reverse"
//           onClick={() => navigate("/dashboard")}
//         >
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-8"
//             alt="Logo"
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Dashboard
//           </span>
//         </a>

//         {/* Hamburger */}
//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-hamburger"
//           aria-expanded={isOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>

//         {/* Menu */}
//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } w-full md:flex md:w-auto`}
//           id="navbar-hamburger"
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-4 font-medium mt-4 md:mt-0 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//             {!user ? (
//               <>
//                 <li>
//                   <Link
//                     to="/"
//                     className="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600"
//                   >
//                     Signup
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/login"
//                     className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                   >
//                     Login
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link
//                     to="/dashboard"
//                     className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                   >
//                     Dashboard
//                   </Link>
//                 </li>
//                 <li>
//                   <button
//                     onClick={handleLogout}
//                     className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white w-full text-left"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;















































// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Store/Slice/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile hamburger
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => navigate("/dashboard")}
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Dashboard
          </span>
        </a>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 font-medium mt-4 md:mt-0 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            {!user ? (
              <>
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600"
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* Desktop Menu Links */}
                <li className="group relative">
                  <Link
                    to="/dashboard"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="group relative">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
