import React, { useState } from "react";
import CustomDrawer from "../../Drawer";
import { db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AttendanceForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNo: "",
    userclass: "",
    date: "",
    status: "",
  });

  const MarkAttendance = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "attendance"), formData);
      toast.success("✅ Attendance Marked Successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      // reset form
      setFormData({
        studentName: "",
        rollNo: "",
        userclass: "",
        date: "",
        status: "",
      });
    } catch (error) {
      console.error("Error: ", error);
      toast.error("❌ Failed to mark attendance", {
        position: "top-right",
        autoClose: 2000,
      });
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
          Attendance Form
        </h1>

        <form onSubmit={MarkAttendance} className="max-w-md mx-auto">
          {/* Student Name */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={formData.studentName}
              onChange={(e) =>
                setFormData({ ...formData, studentName: e.target.value })
              }
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
              value={formData.rollNo}
              onChange={(e) =>
                setFormData({ ...formData, rollNo: e.target.value })
              }
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
              value={formData.userclass}
              onChange={(e) =>
                setFormData({ ...formData, userclass: e.target.value })
              }
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

          {/* Date */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              type="date"
              id="date"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                         border-0 border-b-2 border-gray-300 appearance-none 
                         focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="date"
              className="peer-focus:font-medium absolute text-sm text-gray-500 
                         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                         peer-focus:text-blue-600"
            >
              Date
            </label>
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Status
            </label>
            <div className="flex items-center mb-2">
              <input
                checked={formData.status === "Present"}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                type="radio"
                value="Present"
                name="status"
                className="w-4 h-4 accent-[#2a9b42]"
              />
              <label className="ms-2 text-sm font-medium text-gray-900">
                Present
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                checked={formData.status === "Absent"}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                type="radio"
                value="Absent"
                name="status"
                className="w-4 h-4 accent-[#2a9b42]"
              />
              <label className="ms-2 text-sm font-medium text-gray-900">
                Absent
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={formData.status === "Leave"}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                type="radio"
                value="Leave"
                name="status"
                className="w-4 h-4 accent-[#2a9b42]"
              />
              <label className="ms-2 text-sm font-medium text-gray-900">
                Leave
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-5 text-white bg-[#2a9b42] hover:bg-green-700 
                       focus:ring-4 focus:outline-none focus:ring-[#2a9b42]-300 
                       font-medium rounded-lg text-sm w-full sm:w-auto 
                       px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default AttendanceForm;