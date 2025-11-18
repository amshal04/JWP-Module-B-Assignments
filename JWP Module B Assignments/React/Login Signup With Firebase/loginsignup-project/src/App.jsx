import "./App.css";
import Signup from "./Screens/Signup";                                      
import { Route, Routes } from "react-router-dom"; 
import Login from "./Screens/Login";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Screens/Dashboard";


const App = () => {
  return (
    <>
      <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

 
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />


    </>
  );
};

export default App;