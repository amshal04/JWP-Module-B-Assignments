import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import CustomDrawer from '../../Drawer'
import { db } from '../../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClassAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    qualification: "",
    phone: "",
    dob:"",
    gender:"",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db,"class"),formData);
      toast.success("✅ Class Registered Successfully!");

      // Navigate after 2 seconds so user can see the toast
      setTimeout(() => {
        navigate("/class/list"); // replace with your class list route
      }, 2000);

    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to register class!");
    }
  }

  return (
    <>
      <CustomDrawer/>
      <ToastContainer position="top-right" autoClose={3000} />

      <div style={{marginTop:"0.1rem"}}>
        <h1 className="text-[2.5rem] p-[1rem]" style={{textAlign:"center"}}>Class Registration Form</h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">

          {/* First & Last Name */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input 
                onChange={(e)=>setFormData({...formData,firstName:e.target.value})} 
                type="text" 
                name="floating_first_name" 
                id="floating_first_name" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " required 
              />
              <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">First name</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input 
                onChange={(e)=>setFormData({...formData,lastName:e.target.value})} 
                type="text" 
                name="floating_last_name" 
                id="floating_last_name" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " required 
              />
              <label htmlFor="floating_last_name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Last name</label>
            </div>
          </div>

          {/* Email */}
          <div className="relative z-0 w-full mb-5 group">
            <input 
              onChange={(e)=>setFormData({...formData,email:e.target.value})} 
              type="email" 
              name="floating_email" 
              id="floating_email" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " required 
            />
            <label htmlFor="floating_email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Email address</label>
          </div>

          {/* Qualification */}
          <div className="relative z-0 w-full mb-5 group">
            <input 
              onChange={(e)=>setFormData({...formData,qualification:e.target.value})} 
              type="text" 
              name="qualify" 
              id="qualify" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " required 
            />
            <label htmlFor="qualify" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Qualification</label>
          </div>

          {/* Phone */}
          <div className="relative z-0 w-full mb-5 group">
            <input 
              onChange={(e)=>setFormData({...formData,phone:e.target.value})} 
              type="number" 
              name="phone" 
              id="phone" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " required 
            />
            <label htmlFor="phone" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Phone Number</label>
          </div>

          {/* DOB */}
          <div className="relative z-0 w-full mb-5 group">
            <input 
              onChange={(e)=>setFormData({...formData,dob:e.target.value})} 
              type="date" 
              name="dob" 
              id="dob" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " required 
            />
            <label htmlFor="dob" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Date of Birth</label>
          </div>

          {/* Gender */}
          <div className="flex items-center mb-4">
            <input 
              onChange={(e)=>setFormData({...formData,gender:e.target.value})}
              id="male" 
              type="radio" 
              value="male" 
              name="gender" 
              className="w-4 h-4 accent-[#2a9b42]" 
            />
            <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900">Male</label>
          </div>
          <div className="flex items-center mb-4">
            <input 
              onChange={(e)=>setFormData({...formData,gender:e.target.value})}
              id="female" 
              type="radio" 
              value="female" 
              name="gender" 
              className="w-4 h-4 accent-[#2a9b42]" 
            />
            <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900">Female</label>
          </div>

          <button 
            type="submit" 
            className="mt-5 text-white bg-[#2a9b42] hover:bg-[#238034] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default ClassAdd;