
import * as React from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Modal, Box,
  Typography, Checkbox
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Config/Firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function BasicTable() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [checked, setChecked] = useState([]);
  const [userData, setUserData] = useState([]);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersArray = querySnapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setUserData(usersArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const handleCheck = (id) => {
    if (checked.includes(id)) {
      setChecked(checked.filter((item) => item !== id));
    } else {
      setChecked([...checked, id]);
    }
  };

  const handleDeleteSelected = async () => {
    if (checked.length === 0) {
      alert("Please select at least one user to delete.");
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${checked.length} user?`
    );
    if (confirmDelete) {
      try {
        await Promise.all(
          checked.map(id => deleteDoc(doc(db, "users", id)))
        );
        alert("Selected users deleted successfully.");
        setChecked([]);
        fetchUsers(); 
      } catch (error) {
        console.error("Error deleting users:", error);
      }
    }
  };

  const deleteUser = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "users", userId));
        alert("User deleted successfully.");
        fetchUsers(); 
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="checkbox table">
          <TableHead sx={{ backgroundColor: "rgb(37, 37, 73)" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontSize: 16 }}>
                <Checkbox
                  checked={checked.length === userData.length && userData.length > 0}
                  indeterminate={checked.length > 0 && checked.length < userData.length}
                  onChange={() => {
                    if (checked.length === userData.length) {
                      setChecked([]);
                    } else {
                      setChecked(userData.map(u => u.id));
                    }
                  }}
                />
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: 16 }}>ID</TableCell>
              <TableCell sx={{ color: "white", fontSize: 16 }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontSize: 16 }} align="right">Username</TableCell>
              <TableCell sx={{ color: "white", fontSize: 16 }} align="right">Email</TableCell>
              <TableCell sx={{ color: "white", fontSize: 16 }} align="right">Phone</TableCell>
              <TableCell sx={{ color: "white", fontSize: 16 }} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((e) => (
              <TableRow key={e.id}>
                <TableCell>
                  <Checkbox
                    checked={checked.includes(e.id)}
                    onChange={() => handleCheck(e.id)}
                  />
                </TableCell>
                <TableCell sx={{ fontSize: 15 }}>{e.id}</TableCell>
                <TableCell sx={{ fontSize: 15 }}>{e.name}</TableCell>
                <TableCell sx={{ fontSize: 15 }} align="right">{e.username}</TableCell>
                <TableCell sx={{ fontSize: 15 }} align="right">{e.email}</TableCell>
                <TableCell sx={{ fontSize: 15 }} align="right">{e.phone}</TableCell>
                <TableCell sx={{ fontSize: 15 }} align="right">
                  <VisibilityIcon
                    onClick={() => handleOpen(e)}
                    sx={{ cursor: "pointer", color: "#1976d2", mr: 2 }}
                  />
                  <EditIcon
                    onClick={() => navigate(`/editUser/${e.id}`)}
                    sx={{ cursor: "pointer", color: "green", mr: 2 }}
                  />
                  <DeleteIcon
                    onClick={() => deleteUser(e.id)}
                    sx={{ cursor: "pointer", color: "red" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" gutterBottom>
            User Details
          </Typography>
          {selectedUser && (
            <>
              <Typography><strong>Name:</strong> {selectedUser.name}</Typography>
              <Typography><strong>Username:</strong> {selectedUser.username}</Typography>
              <Typography><strong>Email:</strong> {selectedUser.email}</Typography>
              <Typography><strong>Phone:</strong> {selectedUser.phone}</Typography>
            </>
          )}
        </Box>
      </Modal>

 

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
  <button
    onClick={handleDeleteSelected}
    style={{
      background: "red",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px", 
    }}
  >
    <DeleteIcon />
    DELETE USER
  </button>
</Box>
    </>
  );
}



















































