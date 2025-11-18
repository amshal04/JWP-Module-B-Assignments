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
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import ClassIcon from "@mui/icons-material/Class";
import CalculateIcon from "@mui/icons-material/Calculate";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import CustomDrawer from "../../Drawer";
import Typography from "@mui/material/Typography";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useEffect, useState } from "react";

export default function ResultList() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const handleAddResult = () => {
    navigate("/result/add"); // Route for adding result
  };

  const gettingData = async () => {
    const querySnapshot = await getDocs(collection(db, "results"));
    const results = querySnapshot.docs.map((doc) => ({
      ID: doc.id,
      ...doc.data(),
    }));
    setRows(results);
  };

  useEffect(() => {
    gettingData();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "results", id));
    setRows(rows.filter((row) => row.ID !== id));
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
          Result List
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddResult}
          sx={{
            backgroundColor: "#2a9b42",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#238034",
            },
          }}
        >
          Add Result
        </Button>
      </div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="result table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2a9b42" }}>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>ID</TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <PersonIcon fontSize="small" /> Student Name
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                Roll No
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <ClassIcon fontSize="small" /> Class
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <CalculateIcon fontSize="small" /> Math
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <CalculateIcon fontSize="small" /> Science
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <CalculateIcon fontSize="small" /> English
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <CalculateIcon fontSize="small" /> Computer
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                <CalculateIcon fontSize="small" /> Total
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
                key={row.ID}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.ID}
                </TableCell>
                <TableCell align="right">{row.studentName}</TableCell>
                <TableCell align="right">{row.rollNo}</TableCell>
                <TableCell align="right">{row.userclass}</TableCell>
                <TableCell align="right">{row.math}</TableCell>
                <TableCell align="right">{row.science}</TableCell>
                <TableCell align="right">{row.english}</TableCell>
                <TableCell align="right">{row.computer}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">
                  {row.status === "Pass" ? (
                    <CheckCircleIcon sx={{ color: "green" }} />
                  ) : (
                    <CloseIcon sx={{ color: "red" }} />
                  )}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="error" onClick={() => handleDelete(row.ID)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}