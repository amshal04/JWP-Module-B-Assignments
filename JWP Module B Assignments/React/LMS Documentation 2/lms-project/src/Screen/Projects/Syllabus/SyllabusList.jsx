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
import ClassIcon from "@mui/icons-material/Class";
import SubjectIcon from "@mui/icons-material/Subject";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const SyllabusList = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  // Fetch syllabus data
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "syllabus"));
      const syllabusList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRows(syllabusList);
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to fetch syllabus data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete syllabus
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "syllabus", id));
      toast.success("✅ Syllabus deleted successfully!");
      fetchData(); // refresh list
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to delete syllabus");
    }
  };

  return (
    <>
      <CustomDrawer />

      {/* Header with Add Syllabus button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2a9b42" }}>
          Syllabus List
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/syllabus/add")}
          sx={{
            backgroundColor: "#2a9b42",
            color: "#fff",
            "&:hover": { backgroundColor: "#238034" },
          }}
        >
          Add Syllabus
        </Button>
      </div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="syllabus table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2a9b42" }}>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>ID</TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <SubjectIcon fontSize="small" /> Subject Name
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <ClassIcon fontSize="small" /> Class
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
                <TableCell align="right">{row.subName}</TableCell>
                <TableCell align="right">{row.userclass}</TableCell>
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

export default SyllabusList;