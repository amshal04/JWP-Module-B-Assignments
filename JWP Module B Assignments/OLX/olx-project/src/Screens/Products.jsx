import React from "react";
import { data } from "../Data";
import Cards from "../Components/Cards";

const Products = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Products</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        {data.map((item) => (
          <Cards
            key={item.id}
            productId={item.id}  
            imgSrc={item.image}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
