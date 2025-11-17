import express from "express";
import { userData } from "./data.js";

const app = express();
const PORT = 4000;

// Get All Users
app.get("/api/users", (req, res) => {
res.send(userData);
});

// Get Single User
// app.get("/api/users/:id", (req, res) => {
// // console.log(req.params.id);
// const filterData = userData.filter((e, i)=> req.params.id == e.id);
// res.send(filterData);
// });

// Get All In One
// app.get("/api/users", (req, res)=> {
//     // console.log(req.query);
//     if(req.query.id) {
//       const filterData = userData.filter((e, i)=> req.query.id == e.id); 
//       res.send(filterData); 
//     }
//     else{
//         res.send(userData);
//     }
    
// });

// API Methods CRUD Operation
// get            =========> get data
// post           =========> create data
// put            =========> update data
// delete         =========> delete data

app.get("/api/getusers", (req, res) => {
    res.send("get users");
});

app.post("/api/createusers", (req, res) => {
    res.send("create users");
});

app.put("/api/updateusers", (req, res) => {
    res.send("update users");
});

app.delete("/api/deleteusers", (req, res) => {
    res.send("delete users");
});

app.get("/", (request, response) => {
    response.send({
        message: "server is running now..",
        status: true,
    });
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
    
});