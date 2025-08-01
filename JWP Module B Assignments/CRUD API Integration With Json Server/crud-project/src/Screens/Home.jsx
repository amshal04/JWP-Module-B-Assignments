import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTable from "../Components/Table";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Home = () => {
  let [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteSelected = () => {
  console.log("Delete Selected clicked");
};


  return (
 
    <>
    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2, mt: 2, gap: 2, }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => navigate("/createUser")}
      >
        Create User
      </Button>

      <Button
        onClick={handleDeleteSelected}
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Delete User
      </Button>
    </Box>

    <BasicTable userdata={userData} />
  </>

  );
};

export default Home;