import React from 'react';
import styles from './Flash.module.css';
import flashBanner from "../../assets/flash-summer.webp";

import img1 from "../../assets/cate1.webp";
import img2 from "../../assets/cate2.webp";
import img3 from "../../assets/cate3.webp";
import img4 from "../../assets/cate4.webp";
import img5 from "../../assets/cate5.webp";
import img6 from "../../assets/cate6.webp";

const products = [
  { id: 1, title: "Spoon Holder", price: "Rs.89" , oldPrice: "Rs.94", discount: "-5%", image: img1 },
  { id: 2, title: "Airpods Pro 3rd Gen", price: "Rs.783", oldPrice: "Rs.3,000", discount: "-74%", image: img2 },
  { id: 3, title: "T8 Wireless Headset", price: "Rs.666", oldPrice: "Rs.1,999", discount: "-67%", image: img3 },
  { id: 4, title: "Handbag for Girls", price: "Rs.429", oldPrice: "Rs.599", discount: "-28%", image: img4 },
  { id: 5, title: "Pond’s Face Wash", price: "Rs.398", oldPrice: "Rs.520", discount: "-23%", image: img5 },
  { id: 6, title: "Fridge Organizer", price: "Rs.195", oldPrice: "Rs.597", discount: "-67%", image: img6 },
];

function Flash() {
  return (
  <div className={styles.flashWrapper}>
   <div className={styles.flashMain}>
  <div className={styles.contentWrapper}>
    <img src={flashBanner} alt="Flash Sale Banner" className={styles.flashBanner} />
    <div className={styles.flashTop}>
      <div>
        <h2 className={styles.flashHeading}>Flash Sale</h2>
        <p className={styles.subText}>On Sale Now</p>
      </div>
      <button className={styles.viewAll}>SHOP ALL PRODUCTS</button>
    </div>

    <div className={styles.productRow}>
      {products.map((item) => (
        <div className={styles.saleCard} key={item.id}>
          <img src={item.image} alt={item.title} className={styles.cardImage} />
          <div className={styles.cardBody}>
            <h5>{item.title}</h5>
            <p className={styles.price}>
              {item.price}
              <br />
              <span className={styles.oldPrice}>{item.oldPrice}</span>
              <span className={styles.discount}>{item.discount}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>

  );
}

export default Flash;
