import React, { useEffect, useState } from "react";
import CustomDrawer from "../../Drawer";
import { db } from "../../../config/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonIcon from "@mui/icons-material/Person";
import ClassIcon from "@mui/icons-material/Class";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const AttendanceList = () => {
  const [rows, setRows] = useState([]);

  // Fetch attendance data
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "attendance"));
      const attendanceList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRows(attendanceList);
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to fetch attendance data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete attendance record
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "attendance", id));
      toast.success("✅ Attendance deleted successfully!");
      fetchData(); // refresh list
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to delete attendance");
    }
  };

  return (
    <>
      <CustomDrawer />

      <div style={{ margin: "20px 0", display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2a9b42" }}>
          Attendance List
        </Typography>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="attendance table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2a9b42" }}>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>ID</TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <PersonIcon fontSize="small" /> Student Name
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <PersonIcon fontSize="small" /> Roll No
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <ClassIcon fontSize="small" /> Class
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <CalendarTodayIcon fontSize="small" /> Date
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell align="center" sx={{ color: "#fff", fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.studentName}</TableCell>
                <TableCell align="right">{row.rollNo}</TableCell>
                <TableCell align="right">{row.userclass}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="center">
                  <IconButton color="error" onClick={() => handleDelete(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default AttendanceList;