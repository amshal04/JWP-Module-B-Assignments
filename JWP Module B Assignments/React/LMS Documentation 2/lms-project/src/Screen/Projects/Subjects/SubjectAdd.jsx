import React, { useState } from "react";
import CustomDrawer from "../../Drawer";
import { db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SubjectAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    subName: "",
    userclass: "",
    group: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "subject"), formData);
      toast.success("✅ Subject Added Successfully!", {
        position: "top-right",
        autoClose: 2000,
        onClose: () => navigate("/sub/list"), // navigate after toast closes
      });
      setFormData({
        subName: "",
        userclass: "",
        group: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to add subject", { position: "top-right", autoClose: 2000 });
    }
  };

  return (
    <>
      <CustomDrawer />
      <div style={{ marginTop: "2.5rem" }}>
        <h1 className="text-[2.5rem] p-[2rem]" style={{ textAlign: "center" }}>
          Subject Add
        </h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setFormData({ ...formData, subName: e.target.value })}
              value={formData.subName}
              type="text"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">
              Subject Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setFormData({ ...formData, userclass: e.target.value })}
              value={formData.userclass}
              type="text"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">
              Class
            </label>
          </div>

          <h4 className="text-[1.5rem] p-[2rem]" style={{ textAlign: "start" }}>
            Select Group
          </h4>

          <div className="flex items-center mb-4">
            <input
              onChange={(e) => setFormData({ ...formData, group: e.target.value })}
              checked={formData.group === "general group"}
              id="default-radio-1"
              type="radio"
              value="general group"
              name="group"
              className="w-4 h-4 accent-[#2a9b42]"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              General Science
            </label>
          </div>

          <div className="flex items-center">
            <input
              onChange={(e) => setFormData({ ...formData, group: e.target.value })}
              checked={formData.group === "pre-engineering"}
              id="default-radio-2"
              type="radio"
              value="pre-engineering"
              name="group"
              className="w-4 h-4 accent-[#2a9b42]"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Pre-Engineering
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 text-white bg-[#2a9b42] hover:bg-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-[44px] py-[12px] text-center"
          >
            Submit
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default SubjectAdd;