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
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import CustomDrawer from "../../Drawer";
import Typography from "@mui/material/Typography";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useEffect, useState } from "react";

export default function ClassList() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const handleAddStudent = () => {
    navigate("/class/add");
  };

  const gettingData = async () => {
    const querySnapshot = await getDocs(collection(db, "class"));
    const teachers = querySnapshot.docs.map((doc) => ({
      ID: doc.id,
      ...doc.data(),
    }));
    setRows(teachers);
  };

  useEffect(() => {
    gettingData();
  }, []);

  const handleDelete = (id) => {
    alert(`Delete teacher: ${id}`);
    const delData= deleteDoc(doc(db,"class",id))
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
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#2a9b42" }}
        >
          Class List
        </Typography>
     <Button
  variant="contained"
  startIcon={<AddIcon />}
  onClick={handleAddStudent}
  sx={{
    backgroundColor: "#2a9b42",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#238034",
    },
  }}
>
  Add Class
</Button>

      </div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2a9b42" }}>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                ID
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <PersonIcon fontSize="small" /> First Name
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <PersonIcon fontSize="small" /> Last Name
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <EmailIcon fontSize="small" /> Email
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <ClassIcon fontSize="small" /> Qualification
              </TableCell>
  <TableCell
                align="right"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <ClassIcon fontSize="small" /> Phone
              </TableCell>
                <TableCell
                align="right"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <ClassIcon fontSize="small" /> DOB
              </TableCell>

              <TableCell
                align="right"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <MaleIcon fontSize="small" /> / <FemaleIcon fontSize="small" /> Gender
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
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
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.qualification}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.dob}</TableCell>

                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(row.ID)}
                  >
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