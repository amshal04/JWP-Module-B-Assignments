import React, { useState } from "react";
import CustomDrawer from "../../Drawer";
import { db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResultForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNo: "",
    userclass: "",
    math: "",
    science: "",
    english: "",
    computer: "",
    total: "",
    status: ""
  });

  const AddResult = async (e) => {
    e.preventDefault();

    try {
      // Auto calculate total
      const totalMarks =
        Number(formData.math) +
        Number(formData.science) +
        Number(formData.english) +
        Number(formData.computer);

      const dataToSave = {
        ...formData,
        total: totalMarks,
      };

      const AddData = await addDoc(collection(db, "results"), dataToSave);
      console.log("Result Added: ", AddData);

      toast.success("✅ Result Added Successfully!");
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to add result!");
    }
  };

  return (
    <>
      <CustomDrawer />
      <div style={{ marginTop: "2.5rem" }}>
        <h1
          className="text-[2.5rem] p-[2rem]"
          style={{ textAlign: "center" }}
        >
          Result Form
        </h1>

        <form onSubmit={AddResult} className="max-w-md mx-auto">

          {/* Student Name */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              type="text"
              id="studentName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                         border-0 border-b-2 border-gray-300 appearance-none 
                         focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="studentName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 
                         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                         peer-focus:text-blue-600"
            >
              Student Name
            </label>
          </div>

          {/* Roll No */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
              type="text"
              id="rollNo"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                         border-0 border-b-2 border-gray-300 appearance-none 
                         focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="rollNo"
              className="peer-focus:font-medium absolute text-sm text-gray-500 
                         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                         peer-focus:text-blue-600"
            >
              Roll No
            </label>
          </div>

          {/* Class */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setFormData({ ...formData, userclass: e.target.value })}
              type="text"
              id="class"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                         border-0 border-b-2 border-gray-300 appearance-none 
                         focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="class"
              className="peer-focus:font-medium absolute text-sm text-gray-500 
                         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                         peer-focus:text-blue-600"
            >
              Class
            </label>
          </div>

          {/* Subjects Marks */}
          {["math", "science", "english", "computer"].map((subject) => (
            <div key={subject} className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => setFormData({ ...formData, [subject]: e.target.value })}
                type="number"
                id={subject}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                           border-0 border-b-2 border-gray-300 appearance-none 
                           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={subject}
                className="peer-focus:font-medium absolute text-sm text-gray-500 
                           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                           peer-focus:text-blue-600 capitalize"
              >
                {subject} Marks
              </label>
            </div>
          ))}

          {/* Result Status */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Result Status</label>
            <div className="flex items-center mb-2">
              <input
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                type="radio"
                value="Pass"
                name="status"
                className="w-4 h-4 accent-[#2a9b42]"
              />
              <label className="ms-2 text-sm font-medium text-gray-900">Pass</label>
            </div>
            <div className="flex items-center">
              <input
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                type="radio"
                value="Fail"
                name="status"
                className="w-4 h-4 accent-[#2a9b42]"
              />
              <label className="ms-2 text-sm font-medium text-gray-900">Fail</label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-5 text-white bg-[#2a9b42] hover:bg-white-800 
                       focus:ring-4 focus:outline-none focus:ring-[#2a9b42]-300 
                       font-medium rounded-lg text-sm w-full sm:w-auto 
                       px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default ResultForm;