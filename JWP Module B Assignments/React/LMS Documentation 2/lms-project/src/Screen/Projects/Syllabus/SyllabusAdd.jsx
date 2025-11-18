import React, { useState } from "react";
import CustomDrawer from "../../Drawer";
import { db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SyllabusAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subName: "",
    userclass: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "syllabus"), formData);
      toast.success("✅ Syllabus Added Successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      // Reset form
      setFormData({
        subName: "",
        userclass: "",
      });

      // Navigate to syllabus list after short delay
      setTimeout(() => {
        navigate("/syllabus/list");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to add syllabus", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <CustomDrawer />

      <div style={{ marginTop: "2.5rem" }}>
        <h1 className="text-[2.5rem] p-[2rem]" style={{ textAlign: "center" }}>
          Syllabus Add
        </h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={formData.subName}
              onChange={(e) =>
                setFormData({ ...formData, subName: e.target.value })
              }
              type="text"
              id="subName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="subName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600"
            >
              Enter Your Subject Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              value={formData.userclass}
              onChange={(e) =>
                setFormData({ ...formData, userclass: e.target.value })
              }
              type="text"
              id="userclass"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userclass"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600"
            >
              Enter Your Class
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 text-white bg-[#2a9b42] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-[#2a9b42]-300 font-medium rounded-lg text-sm w-full sm:w-auto px-[44px] py-[12px] text-center"
          >
            Submit
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default SyllabusAdd;