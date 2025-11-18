import React, { useEffect, useState } from "react";
import BasicTable from "../Components/Table";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = querySnapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      setUserData(users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 2,
          mt: 2,
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate("/createUser")}
        >
          Create User
        </Button>
      </Box>


      <BasicTable userdata={userData} />
    </>
  );
};

export default Home;





