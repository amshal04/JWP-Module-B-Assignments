
import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../Config/Firebase"; 

const CreateUser = () => {
  const [createUserData, setCreateUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    validateForm();
  }, [createUserData]);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!createUserData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!createUserData.username.trim()) {
      tempErrors.username = "Username is required";
      isValid = false;
    }

    if (!createUserData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(createUserData.email)
    ) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!createUserData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d+$/.test(createUserData.phone)) {
      tempErrors.phone = "Phone must contain only digits";
      isValid = false;
    }

    setErrors(tempErrors);
    setIsFormValid(isValid);
    return isValid;
  };

  const handleCreateUser = async () => {
    if (!validateForm()) return;

    try {
      await addDoc(collection(db, "users"), createUserData);
      alert("User created successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <Paper elevation={24} sx={{ margin: 10, padding: 3 }}>
        <Typography sx={{ marginBottom: 3 }} variant="h5">
          Create User
        </Typography>

        <TextField
          error={Boolean(errors.name)}
          helperText={errors.name}
          onChange={(e) =>
            setCreateUserData({ ...createUserData, name: e.target.value })
          }
          sx={{ marginBottom: 3 }}
          label="Enter name"
          fullWidth
        />

        <TextField
          error={Boolean(errors.username)}
          helperText={errors.username}
          onChange={(e) =>
            setCreateUserData({
              ...createUserData,
              username: e.target.value,
            })
          }
          sx={{ marginBottom: 3 }}
          label="Enter Username"
          fullWidth
        />

        <TextField
          error={Boolean(errors.email)}
          helperText={errors.email}
          onChange={(e) =>
            setCreateUserData({ ...createUserData, email: e.target.value })
          }
          sx={{ marginBottom: 3 }}
          label="Enter Email"
          fullWidth
        />

        <TextField
          error={Boolean(errors.phone)}
          helperText={errors.phone}
          onChange={(e) =>
            setCreateUserData({ ...createUserData, phone: e.target.value })
          }
          sx={{ marginBottom: 3 }}
          label="Enter Phone"
          fullWidth
        />

        <Button
          onClick={handleCreateUser}
          variant="contained"
          disabled={!isFormValid}
        >
          Create User
        </Button>
      </Paper>
    </form>
  );
};

export default CreateUser;
















































