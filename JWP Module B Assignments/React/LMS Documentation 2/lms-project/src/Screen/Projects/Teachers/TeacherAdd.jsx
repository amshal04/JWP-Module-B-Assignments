import React, { useState } from "react";
import CustomDrawer from "../../Drawer";
import { db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeacherAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    qualification: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "teacher"), formData);
      toast.success("Teacher added successfully!", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/teacher/list"); // Change to your teacher list route
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Error adding teacher!");
    }
  };

  return (
    <>
      <CustomDrawer />
      <ToastContainer />
      <div style={{ marginTop: "2.5rem" }}>
        <h1
          className="text-[2.5rem] p-[2rem]"
          style={{ textAlign: "center" }}
        >
          Teachers Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                type="text"
                placeholder="First name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                type="text"
                placeholder="Last name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                required
              />
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              placeholder="Email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              required
            />
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) =>
                setFormData({ ...formData, qualification: e.target.value })
              }
              type="text"
              placeholder="Qualification"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              required
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              id="male"
              type="radio"
              value="male"
              name="gender"
              className="w-4 h-4 accent-[#2a9b42]"
            />
            <label htmlFor="male" className="ms-2 text-sm font-medium">
              Male
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              id="female"
              type="radio"
              value="female"
              name="gender"
              className="w-4 h-4 accent-[#2a9b42]"
            />
            <label htmlFor="female" className="ms-2 text-sm font-medium">
              Female
            </label>
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
  );
};

export default TeacherAdd;