import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../Config/Firebase"; 

const EditUser = () => {
  const { id } = useParams();
  const [singleUserData, setSingleUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRef = doc(db, "users", id);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setSingleUserData(userSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [id]);

  const editUser = async () => {
    try {
      const userRef = doc(db, "users", id);
      await updateDoc(userRef, singleUserData);
      alert("User updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <form>
      <Paper elevation={24} sx={{ margin: 10, padding: 3 }}>
        <Typography sx={{ marginBottom: 3 }} variant="h5">
          Edit User
        </Typography>

        <TextField
          onChange={(e) =>
            setSingleUserData({ ...singleUserData, name: e.target.value })
          }
          variant="standard"
          value={singleUserData.name || ""}
          sx={{ marginBottom: 3 }}
          label="Enter name"
          fullWidth
        />

        <TextField
          onChange={(e) =>
            setSingleUserData({ ...singleUserData, username: e.target.value })
          }
          variant="standard"
          value={singleUserData.username || ""}
          sx={{ marginBottom: 3 }}
          label="Enter Username"
          fullWidth
        />

        <TextField
          onChange={(e) =>
            setSingleUserData({ ...singleUserData, email: e.target.value })
          }
          variant="standard"
          value={singleUserData.email || ""}
          sx={{ marginBottom: 3 }}
          label="Enter Email"
          fullWidth
        />

        <TextField
          onChange={(e) =>
            setSingleUserData({ ...singleUserData, phone: e.target.value })
          }
          variant="standard"
          value={singleUserData.phone || ""}
          sx={{ marginBottom: 3 }}
          label="Enter Phone"
          fullWidth
        />

        <Button onClick={editUser} color="error" variant="contained">
          Edit User
        </Button>
      </Paper>
    </form>
  );
};

export default EditUser;

