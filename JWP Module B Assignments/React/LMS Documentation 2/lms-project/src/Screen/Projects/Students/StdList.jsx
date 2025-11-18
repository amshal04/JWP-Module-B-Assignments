// import * as React from "react";
// import { useNavigate } from "react-router-dom";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import PersonIcon from "@mui/icons-material/Person";
// import EmailIcon from "@mui/icons-material/Email";
// import ClassIcon from "@mui/icons-material/Class";
// import MaleIcon from "@mui/icons-material/Male";
// import FemaleIcon from "@mui/icons-material/Female";
// import CustomDrawer from "../../Drawer";
// import Typography from "@mui/material/Typography";
// import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
// import { db } from "../../../config/firebase";
// import { useEffect, useState } from "react";

// export default function StdList() {
//   const navigate = useNavigate();
//   const [rows, setRows] = useState([]);

//   const handleAddStudent = () => {
//     navigate("/std/add");
//   };

//   const gettingData = async () => {
//     const querySnapshot = await getDocs(collection(db, "student"));
//     const students = querySnapshot.docs.map((doc) => ({
//       ID: doc.id,
//       ...doc.data(),
//     }));
//     setRows(students);
//   };

//   useEffect(() => {
//     gettingData();
//   }, []);

//   const handleDelete = (id) => {
//     alert(`Delete student: ${id}`);
//     const delData= deleteDoc(doc(db,"student",id))
//   };

//   return (
//     <>
//       <CustomDrawer />

//       {/* Header */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           margin: "20px 0",
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{ fontWeight: "bold", color: "#2a9b42" }}
//         >
//           Student List
//         </Typography>
//      <Button
//   variant="contained"
//   startIcon={<AddIcon />}
//   onClick={handleAddStudent}
//   sx={{
//     backgroundColor: "#2a9b42",
//     color: "#fff",
//     "&:hover": {
//       backgroundColor: "#238034",
//     },
//   }}
// >
//   Add Student
// </Button>

//       </div>

//       {/* Table */}
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow sx={{ backgroundColor: "#2a9b42" }}>
//               <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
//                 ID
//               </TableCell>
//               <TableCell
//                 align="right"
//                 sx={{ color: "#fff", fontWeight: "bold" }}
//               >
//                 <PersonIcon fontSize="small" /> First Name
//               </TableCell>
//               <TableCell
//                 align="right"
//                 sx={{ color: "#fff", fontWeight: "bold" }}
//               >
//                 <PersonIcon fontSize="small" /> Last Name
//               </TableCell>
//               <TableCell
//                 align="right"
//                 sx={{ color: "#fff", fontWeight: "bold" }}
//               >
//                 <EmailIcon fontSize="small" /> Email
//               </TableCell>
//               <TableCell
//                 align="right"
//                 sx={{ color: "#fff", fontWeight: "bold" }}
//               >
//                 <ClassIcon fontSize="small" /> Class
//               </TableCell>
//               <TableCell
//                 align="right"
//                 sx={{ color: "#fff", fontWeight: "bold" }}
//               >
//                 <MaleIcon fontSize="small" /> / <FemaleIcon fontSize="small" /> Gender
//               </TableCell>
//               <TableCell
//                 align="center"
//                 sx={{ color: "#fff", fontWeight: "bold" }}
//               >
//                 Actions
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow
//                 key={row.ID}
//                 sx={{
//                   "&:last-child td, &:last-child th": { border: 0 },
//                   "&:hover": { backgroundColor: "#f5f5f5" },
//                 }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.ID}
//                 </TableCell>
//                 <TableCell align="right">{row.firstName}</TableCell>
//                 <TableCell align="right">{row.lastName}</TableCell>
//                 <TableCell align="right">{row.email}</TableCell>
//                 <TableCell align="right">{row.class}</TableCell>
//                 <TableCell align="right">{row.gender}</TableCell>
//                 <TableCell align="center">
//                   <IconButton
//                     color="error"
//                     onClick={() => handleDelete(row.ID)}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }























// src/pages/Student/StdList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import { HiOutlineMail, HiOutlineTrash, HiOutlinePhone } from "react-icons/hi";
import { GiClassicalKnowledge } from "react-icons/gi";
import { FaMars, FaVenus, FaPlus, FaUser } from "react-icons/fa";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import CustomDrawer from "../../Drawer";

export default function StdList() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const handleAddStudent = () => {
    navigate("/std/add");
  };

  const gettingData = async () => {
    const querySnapshot = await getDocs(collection(db, "student"));
    const students = querySnapshot.docs.map((doc) => ({
      ID: doc.id,
      ...doc.data(),
    }));
    setRows(students);
  };

  useEffect(() => {
    gettingData();

    // 👉 Student List aane par Drawer band
    const drawer = document.getElementById("customDrawer");
    if (drawer) drawer.classList.add("hidden");
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "student", id));
    setRows(rows.filter((row) => row.ID !== id));
  };

  return (
    <>
      {/* Drawer */}
      <CustomDrawer />

      {/* Header */}
      <div className="flex justify-between items-center my-6">
        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
          Student List
        </h2>

        <Button
          color="success"
          onClick={handleAddStudent}
          className="flex items-center gap-2 
            bg-green-600 hover:bg-green-700 
            dark:bg-green-500 dark:hover:bg-green-600 
            text-white"
        >
          <FaPlus /> Add Student
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <Table>
          <TableHead className="bg-green-600 text-white dark:bg-green-700 dark:text-gray-100">
            <TableRow>
              <TableHeadCell className="font-bold">ID</TableHeadCell>
              <TableHeadCell className="font-bold">
                <FaUser className="inline mr-1" /> Full Name
              </TableHeadCell>
              <TableHeadCell className="font-bold">
                <HiOutlineMail className="inline mr-1" /> Email
              </TableHeadCell>
              <TableHeadCell className="font-bold">
                <HiOutlinePhone className="inline mr-1" /> Contact
              </TableHeadCell>
              <TableHeadCell className="font-bold">
                <GiClassicalKnowledge className="inline mr-1" /> Class
              </TableHeadCell>
              <TableHeadCell className="font-bold">Group</TableHeadCell>
              <TableHeadCell className="font-bold">
                <FaMars className="inline mr-1" /> /{" "}
                <FaVenus className="inline ml-1" /> Gender
              </TableHeadCell>
              <TableHeadCell className="font-bold text-center">
                Actions
              </TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ID}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <TableCell>{row.ID}</TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.contactNumber}</TableCell>
                <TableCell>{row.class}</TableCell>
                <TableCell>{row.group}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell className="text-center">
                  <Button
                    color="failure"
                    size="xs"
                    className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white"
                    onClick={() => handleDelete(row.ID)}
                  >
                    <HiOutlineTrash />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

























