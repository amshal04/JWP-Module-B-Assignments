import React from "react";
import ReactDom from "react-dom/client"; 
import './index.css'
import App from './App.jsx'

const divElement = document.getElementById("root");
  
ReactDom.createRoot(divElement).render(
 <>
<h1
  style={{
    fontSize: "6rem",
    color: "#fff",
    backgroundImage: "linear-gradient(to right, #141e30, #243b55)", 
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "40px",
    margin: "20px",
    border: "5px solid #00f2fe",
    borderRadius: "20px",
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
    letterSpacing: "2px",
    wordSpacing: "10px",
    lineHeight: "1.2",
    textShadow: "2px 2px 8px #00f2fe",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }}
>
  hello world & hello react!!
</h1>

<h2
  style={{
    fontSize: "6rem",
    color: "red",
    backgroundColor: "black",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "40px",
    margin: "20px",
    border: "5px solid red",
    borderRadius: "20px",
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
    letterSpacing: "2px",
    wordSpacing: "10px",
    lineHeight: "1.2",
    textShadow: "2px 2px 8px yellow",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }}
  >hello world & hello react!!</h2>
</>

 
);


