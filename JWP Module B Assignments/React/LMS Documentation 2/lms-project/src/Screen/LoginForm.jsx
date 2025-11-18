// // src/pages/Login.jsx
// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Box,
//   Typography,
//   CircularProgress,
//   Paper,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../Store/Slice/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import Navbar from "../Components/Navbar";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ email, password }))
//       .unwrap()
//       .then(() => {
//         toast.success("Login successful! 🚀");
//         navigate("/dashboard");
//       })
//       .catch((err) => {
//         toast.error(err);
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "90vh",
//           background: "#f4f7f6",
//           px: 2,
//         }}
//       >
//         <Paper
//           elevation={6}
//           sx={{
//             maxWidth: 400,
//             width: "100%",
//             p: 4,
//             borderRadius: 3,
//           }}
//         >
//           <Typography
//             variant="h4"
//             gutterBottom
//             align="center"
//             sx={{ fontWeight: "bold", color: "#2a9b42" }}
//           >
//             Welcome Back
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <TextField
//               fullWidth
//               margin="normal"
//               type="password"
//               label="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{
//                 mt: 3,
//                 py: 1.2,
//                 backgroundColor: "#2a9b42",
//                 fontWeight: "bold",
//                 borderRadius: 2,
//                 "&:hover": { backgroundColor: "#24913a" },
//               }}
//             >
//               {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
//             </Button>

//             {error && (
//               <Typography
//                 color="error"
//                 variant="body2"
//                 align="center"
//                 sx={{ mt: 2 }}
//               >
//                 {error}
//               </Typography>
//             )}
//           </form>

//           <Typography align="center" sx={{ mt: 3, fontSize: 14 }}>
//             Don’t have an account?{" "}
//             <Link
//               to="/"
//               style={{
//                 color: "#2a9b42",
//                 fontWeight: "bold",
//                 textDecoration: "none",
//               }}
//             >
//               Signup
//             </Link>
//           </Typography>
//         </Paper>
//       </Box>
//     </>
//   );
// };

// export default Login;



















// src/pages/Login.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/Slice/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        toast.success("Login successful! 🚀");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 py-8">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              LOGIN
            </h1>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-3 text-sm text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {loading ? "Loading..." : "Sign in"}
              </button>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Don’t have an account yet?{" "}
                <Link
                  to="/"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
