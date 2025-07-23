import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ productId, imgSrc, title, desc }) => {
  return (
    <Card
      style={{
        width: "18rem",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease",
      }}
      className="hover-card"
    >
      <Card.Img
        variant="top"
        src={imgSrc}
        height="200"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <h5 style={{ fontWeight: "bold", color: "#002f34" }}>{title}</h5>
        <Card.Text style={{ fontSize: "14px", color: "#4a4a4a" }}>{desc}</Card.Text>
        <Link to={`/product/${productId}`} className="mt-auto">
          <Button variant="outline-dark" size="sm">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Cards;
