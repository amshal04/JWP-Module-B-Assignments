import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomDrawer from "../../Drawer"; // ✅ keep dashboard drawer

const FeeSubmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    amount: "",
    method: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("✅ Payment submitted successfully!", {
      position: "top-center",
      autoClose: 3000,
    });

    setFormData({ name: "", class: "", amount: "", method: "" });
  };

  return (
    <>
      <CustomDrawer />  {/* ✅ Dashboard/Drawer restored */}

      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h1 className="text-center text-3xl font-bold mb-6 underline text-[#2a9b42]">
            Payment for
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-[#2a9b42]">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#2a9b42]"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#2a9b42]">
                Class
              </label>
              <input
                type="text"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#2a9b42]"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#2a9b42]">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#2a9b42]"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#2a9b42]">
                Payment Method *
              </label>
              <select
                name="method"
                value={formData.method}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#2a9b42]"
              >
                <option value="">Select Method</option>
                <option value="Cash">Cash</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="EasyPaisa">EasyPaisa</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2a9b42] hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
            >
              Submit Payment
            </button>
          </form>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default FeeSubmission;