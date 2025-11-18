
import React from "react";
import Cards from "../Cards/Cards.jsx";
import Data from "../../Data.jsx";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <>
      <h3 className={styles.heading}>Just For You</h3> 
      <div className={styles.wrapper}>
        <div className={styles.flexRow}>
          {Data.map((item) => (
            <Cards
              key={item.id}
              title={item.title}
              imgSrc={item.image}
              price={`Rs. ${item.price}`}
              rating={item.rating.rate}
              count={item.rating.count}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;


