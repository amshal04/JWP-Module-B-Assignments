import * as React from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SubjectIcon from "@mui/icons-material/Subject";
import ClassIcon from "@mui/icons-material/Class";
import Typography from "@mui/material/Typography";
import CustomDrawer from "../../Drawer";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubjectList() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const handleAddSubject = () => {
    navigate("/sub/add");
  };

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "subject"));
      const subjectList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRows(subjectList);
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to fetch subject data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "subject", id));
      toast.success("✅ Subject deleted successfully!");
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to delete subject");
    }
  };

  return (
    <>
      <CustomDrawer />

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2a9b42" }}>
          Subject List
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddSubject}
          sx={{
            backgroundColor: "#2a9b42",
            color: "#fff",
            "&:hover": { backgroundColor: "#238034" },
          }}
        >
          Add Subject
        </Button>
      </div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="subject table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2a9b42" }}>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>ID</TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <SubjectIcon fontSize="small" /> Subject Name
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <ClassIcon fontSize="small" /> Class
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                Group
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
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell align="right">{row.subName}</TableCell>
                <TableCell align="right">{row.userclass}</TableCell>
                <TableCell align="right">{row.group}</TableCell>
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
}