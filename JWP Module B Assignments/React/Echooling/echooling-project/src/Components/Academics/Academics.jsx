import React from "react";
import styles from "./Academics.module.css";
import img1 from '../../assets/academics-1.jpg';
import img2 from '../../assets/academics-2.jpg';
import img3 from '../../assets/academics-3.jpg';
import img4 from '../../assets/academics-4.jpg';
import arrow from '../../assets/right-arrow.png';
import design from '../../assets/design.png';


const Academics = () => {
  const data = [
    { img: img1, title: "Let's Talk Science" },
    { img: img2, title: "Innovative Courses" },
    { img: img3, title: "Cloud Storage" },
    { img: img4, title: "Online Education" },
  ];

  return (
    <div className={styles.Container}>
      <h1 className={styles.Academics}>Academics
        <img src={design} className={styles.Design} alt="decorative line" />
      </h1>
      <div className={styles.CardWrapper}>
        {data.map((item, i) => (
          <div key={i} className={styles.Card}>
            <img src={item.img} className={styles.CardImage} alt={item.title} />
            <div className={styles.TextOverlay}>
              <h5 className={styles.Title}>{item.title}</h5>
              <button className={styles.Button}>
                Learn More <img src={arrow} className={styles.ArrowIcon} alt="→" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;