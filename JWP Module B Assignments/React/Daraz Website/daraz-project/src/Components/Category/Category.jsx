import React from "react";
import styles from "./Category.module.css";

import cate1 from "../../assets/cate1.webp";
import cate2 from "../../assets/cate2.webp";
import cate3 from "../../assets/cate3.webp";
import cate4 from "../../assets/cate4.webp";
import cate5 from "../../assets/cate5.webp";
import cate6 from "../../assets/cate6.webp";
import cate7 from "../../assets/cate7.webp";
import cate8 from "../../assets/cate8.webp";
import cate9 from "../../assets/cate9.webp";
import cate10 from "../../assets/cate10.webp";
import cate11 from "../../assets/cate11.webp";
import cate12 from "../../assets/cate12.webp";
import cate13 from "../../assets/cate13.webp";
import cate14 from "../../assets/cate14.webp";
import cate15 from "../../assets/cate15.webp";
import cate16 from "../../assets/cate16.webp";

const categories = [
  { img: cate1, label: "3D Printers" },
  { img: cate2, label: "Pasta Tools" },
  { img: cate3, label: "SIM Tools" },
  { img: cate4, label: "Protective Gear" },
  { img: cate5, label: "Screen Protectors" },
  { img: cate6, label: "Casserole Pots" },
  { img: cate7, label: "Hoodies" },
  { img: cate8, label: "Toy Organisers" },
  { img: cate9, label: "Pendants" },
  { img: cate10, label: "Microphones" },
  { img: cate11, label: "Donate" },
  { img: cate12, label: "Heatsinks" },
  { img: cate13, label: "Braces" },
  { img: cate14, label: "Eyeliners" },
  { img: cate15, label: "Glassware" },
  { img: cate16, label: "Kids Food" },
];

const Cate = () => {
  return (
    <>
      <h3 className={styles.heading}>Categories</h3>
      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((item, index) => (
            <div className={styles.box} key={index}>
              <img src={item.img} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cate;


