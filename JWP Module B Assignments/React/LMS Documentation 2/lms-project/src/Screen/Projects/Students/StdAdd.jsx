// import React, { useState } from "react";
// import CustomDrawer from "../../Drawer";
// import { db } from "../../../config/firebase";
// import { addDoc, collection } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const StdAdd = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     class: "",
//     gender: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "student"), formData);
//       toast.success("Student added successfully!"); // show success toast
//       setTimeout(() => {
//         navigate("/std/list"); // navigate back to student list
//       }, 1500); // wait 1.5s to show toast
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to add student!");
//     }
//   };

//   return (
//     <>
//       <CustomDrawer />
//       <ToastContainer position="top-right" autoClose={3000} />

//       <div style={{ marginTop: "2.5rem" }}>
//         <h1
//           className="text-[2.5rem] p-[2rem]"
//           style={{ textAlign: "center" }}
//         >
//           Student Registration Form
//         </h1>

//         <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//           {/* First Name */}
//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 onChange={(e) =>
//                   setFormData({ ...formData, firstName: e.target.value })
//                 }
//                 type="text"
//                 name="floating_first_name"
//                 id="floating_first_name"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="floating_first_name"
//                 className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
//               >
//                 First name
//               </label>
//             </div>

//             {/* Last Name */}
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 onChange={(e) =>
//                   setFormData({ ...formData, lastName: e.target.value })
//                 }
//                 type="text"
//                 name="floating_last_name"
//                 id="floating_last_name"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="floating_last_name"
//                 className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
//               >
//                 Last name
//               </label>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               type="email"
//               name="floating_email"
//               id="floating_email"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="floating_email"
//               className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
//             >
//               Email address
//             </label>
//           </div>

//           {/* Class */}
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               onChange={(e) =>
//                 setFormData({ ...formData, class: e.target.value })
//               }
//               type="text"
//               name="Class"
//               id="Class"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="Class"
//               className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
//             >
//               Class
//             </label>
//           </div>

//           {/* Gender */}
//           <div className="flex items-center mb-4">
//             <input
//               onChange={(e) =>
//                 setFormData({ ...formData, gender: e.target.value })
//               }
//               id="default-radio-1"
//               type="radio"
//               value="male"
//               name="gender"
//               className="w-4 h-4 accent-[#2a9b42]"
//             />
//             <label
//               htmlFor="default-radio-1"
//               className="ms-2 text-sm font-medium text-gray-900"
//             >
//               Male
//             </label>
//           </div>

//           <div className="flex items-center mb-4">
//             <input
//               onChange={(e) =>
//                 setFormData({ ...formData, gender: e.target.value })
//               }
//               id="default-radio-2"
//               type="radio"
//               value="female"
//               name="gender"
//               className="w-4 h-4 accent-[#2a9b42]"
//             />
//             <label
//               htmlFor="default-radio-2"
//               className="ms-2 text-sm font-medium text-gray-900"
//             >
//               Female
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="mt-5 text-white bg-[#2a9b42] hover:bg-[#1f7a32] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default StdAdd;




























// src/Screen/Student/StdAdd.jsx
import React, { useState } from "react";
import CustomDrawer from "../../Drawer";
import { db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StdAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    class: "",
    group: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "student"), formData);
      toast.success("Student added successfully!");
      setTimeout(() => {
        navigate("/std/list");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add student!");
    }
  };

  return (
    <>
      <CustomDrawer />
      <ToastContainer position="top-right" autoClose={3000} />

      <section className="bg-white dark:bg-gray-900 min-h-screen pt-20">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white text-center">
            Student Registration Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  value={formData.fullName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="student@email.com"
                  required
                />
              </div>

              {/* Contact Number */}
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  onChange={(e) =>
                    setFormData({ ...formData, contactNumber: e.target.value })
                  }
                  value={formData.contactNumber}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="0301-2345678"
                  required
                />
              </div>

              {/* Class */}
              <div>
                <label
                  htmlFor="class"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Class
                </label>
                <input
                  type="text"
                  id="class"
                  onChange={(e) =>
                    setFormData({ ...formData, class: e.target.value })
                  }
                  value={formData.class}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="10th Grade"
                  required
                />
              </div>

              {/* Select Group */}
              <div>
                <label
                  htmlFor="group"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Group
                </label>
                <select
                  id="group"
                  onChange={(e) =>
                    setFormData({ ...formData, group: e.target.value })
                  }
                  value={formData.group}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                >
                  <option value="">Select Group</option>
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>

              {/* Gender */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <input
                      id="male"
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 
                      focus:ring-primary-500 dark:focus:ring-primary-600 
                      dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="male"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 
                      focus:ring-primary-500 dark:focus:ring-primary-600 
                      dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="female"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}

 <button
  type="submit"
  className="inline-flex items-center px-5 py-2.5 mt-6 text-sm font-medium text-center text-white 
  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 
  dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 rounded-lg"
>
  Submit
</button>

          </form>
        </div>
      </section>
    </>
  );
};

export default StdAdd;
