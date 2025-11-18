// // src/pages/Signup.jsx
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
// import { signupUser } from "../Store/Slice/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import Navbar from "../Components/Navbar";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(signupUser({ email, password }))
//       .unwrap()
//       .then(() => {
//         toast.success("Signup successful! 🎉");
//         navigate("/login");
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
//             Create Account
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
//               {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
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
//             Already have an account?{" "}
//             <Link to="/login" style={{ color: "#2a9b42", fontWeight: "bold", textDecoration: "none" }}>
//               Login
//             </Link>
//           </Typography>
//         </Paper>
//       </Box>
//     </>
//   );
// };

// export default Signup;






























// src/pages/Signup.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../Store/Slice/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    dispatch(signupUser({ email, password }))
      .unwrap()
      .then(() => {
        toast.success("Signup successful! 🎉");
        navigate("/login");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 py-8">
        <div className="flex flex-col items-center w-full sm:max-w-md bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white mt-6"
            onClick={() => navigate("/")}
          >
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              className="w-8 h-8 mr-2"
              alt="logo"
            />
            Flowbite
          </a>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Create an account
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {loading ? "Loading..." : "Create an account"}
              </button>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
