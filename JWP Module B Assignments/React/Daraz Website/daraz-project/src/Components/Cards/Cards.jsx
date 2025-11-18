import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ title, imgSrc, rating, price, count }) => {
  return (
    <div className={styles.productBox}>
      <img src={imgSrc} alt={title} />
      <h5 className={styles.productTitle}>{title}</h5>
      <h4 className={styles.price}>
        {price} <span className={styles.discount}>-15%</span>
      </h4>
      <p className={styles.rating}>
        {rating} ★ <span className={styles.reviewCount}>({count})</span>
      </p>
    </div>
  );
};

export default Cards;

