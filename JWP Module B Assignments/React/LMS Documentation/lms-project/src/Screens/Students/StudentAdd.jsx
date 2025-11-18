// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Button, Label, TextInput, Card } from "flowbite-react";

// const StudentAdd = () => {
//   const { id } = useParams(); // Edit mode check
//   const navigate = useNavigate();

//   const [student, setStudent] = useState({
//     name: "",
//     email: "",
//     course: "",
//     age: "",
//   });

//   // Load student data in edit mode
//   useEffect(() => {
//     if (id) {
//       const students = JSON.parse(localStorage.getItem("students")) || [];
//       const existing = students.find((s) => s.id === id);
//       if (existing) {
//         setStudent(existing);
//       }
//     }
//   }, [id]);

//   // Handle input change
//   const handleChange = (e) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   // Handle submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let students = JSON.parse(localStorage.getItem("students")) || [];

//     if (id) {
//       // Edit mode
//       students = students.map((s) => (s.id === id ? student : s));
//     } else {
//       // Add mode
//       student.id = Date.now().toString();
//       students.push(student);
//     }

//     localStorage.setItem("students", JSON.stringify(students));
//     navigate("/students");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <Card className="w-full max-w-md">
//         <h2 className="text-xl font-bold text-center mb-4">
//           {id ? "Edit Student" : "Add Student"}
//         </h2>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <div>
//             <Label htmlFor="name" value="Name" />
//             <TextInput
//               id="name"
//               name="name"
//               value={student.name}
//               onChange={handleChange}
//               required
//               placeholder="Enter student name"
//             />
//           </div>

//           <div>
//             <Label htmlFor="email" value="Email" />
//             <TextInput
//               id="email"
//               type="email"
//               name="email"
//               value={student.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter student email"
//             />
//           </div>

//           <div>
//             <Label htmlFor="course" value="Course" />
//             <TextInput
//               id="course"
//               name="course"
//               value={student.course}
//               onChange={handleChange}
//               required
//               placeholder="Enter course name"
//             />
//           </div>

//           <div>
//             <Label htmlFor="age" value="Age" />
//             <TextInput
//               id="age"
//               type="number"
//               name="age"
//               value={student.age}
//               onChange={handleChange}
//               required
//               placeholder="Enter student age"
//             />
//           </div>

//           <Button type="submit" gradientDuoTone="purpleToBlue">
//             {id ? "Update" : "Add"} Student
//           </Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default StudentAdd;




























// import React from 'react'

// const StudentAdd = () => {
//   return (
//     <>
     

// <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow dark:bg-gray-800">
//   {/* <!-- Heading --> */}
//   <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Add Student</h2>

//   <form>
//     {/* <!-- Name --> */}
//     <div class="mb-5">
//       <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
//       <input type="text" id="name" placeholder="Enter full name" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//     </div>

//     {/* <!-- Email --> */}
//     <div class="mb-5">
//       <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
//       <input type="email" id="email" placeholder="name@example.com" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//     </div>

//     {/* <!-- Address --> */}
//     <div class="mb-5">
//       <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
//       <input type="text" id="address" placeholder="Enter address" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//     </div>

//     {/* <!-- Contact Number --> */}
//     <div class="mb-5">
//       <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
//       <input type="tel" id="contact" placeholder="03xxxxxxxxx" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//     </div>

//     {/* <!-- Class --> */}
//     <div class="mb-5">
//       <label for="class" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class</label>
//       <input type="text" id="class" placeholder="Enter class" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//     </div>

//  <fieldset className="mb-5">
//   <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//     Gender
//   </legend>

//   <div className="flex items-center mb-4">
//     <input
//       id="gender-male"
//       type="radio"
//       name="gender"
//       value="Male"
//       checked={formData.gender === "Male"}
//       onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//       className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
//         dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
//     />
//     <label
//       htmlFor="gender-male"
//       className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//     >
//       Male
//     </label>
//   </div>

//   <div className="flex items-center mb-4">
//     <input
//       id="gender-female"
//       type="radio"
//       name="gender"
//       value="Female"
//       checked={formData.gender === "Female"}
//       onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//       className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
//         dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
//     />
//     <label
//       htmlFor="gender-female"
//       className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//     >
//       Female
//     </label>
//   </div>
// </fieldset>


//     {/* <!-- File Upload --> */}
//     <div class="mb-5">
//       <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload Profile Picture</label>
//       <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
//       {/* <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm you are logged into your account</div> */}
//     </div>

//     {/* <!-- Submit Button --> */}
//     <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//       Add Student
//     </button>
//   </form>
// </div>


//     </>
//   )
// }

// export default StudentAdd



































import React from "react";
import { useState } from "react";

const StudentAdd = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    address: initialData.address || "",
    contact: initialData.contact || "",
    className: initialData.className || "",
    gender: initialData.gender || "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData); // Call parent callback if provided
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        {initialData.name ? "Edit Student" : "Add Student"}
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="mb-5">
          <label
            htmlFor="contact"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="03xxxxxxxxx"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        {/* Class */}
        <div className="mb-5">
          <label
            htmlFor="className"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Class
          </label>
          <input
            type="text"
            id="className"
            name="className"
            value={formData.className}
            onChange={handleChange}
            placeholder="Enter class"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        {/* Gender */}
        <fieldset className="mb-5">
          <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Gender
          </legend>

          <div className="flex items-center mb-4">
            <input
              id="gender-male"
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
                dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="gender-male"
              className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Male
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="gender-female"
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
                dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="gender-female"
              className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Female
            </label>
          </div>
        </fieldset>

        {/* File Upload */}
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="profilePic"
          >
            Upload Profile Picture
          </label>
          <input
            id="profilePic"
            name="profilePic"
            type="file"
            onChange={handleChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg 
              cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
            rounded-lg text-sm px-5 py-2.5 text-center 
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {initialData.name ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};

export default StudentAdd;

