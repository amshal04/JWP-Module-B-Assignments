import React from "react";
import styles from "./Students.module.css";
import studentImg from "../../assets/students.png"; 
import starIcon from "../../assets/star.jpeg";       
import design from '../../assets/design.png';


const Students = () => {
  return (
    <section className={styles.reviewSection}>
      <h2>What our student saying
        <br />
        <img src={design} className={styles.design} alt="decorative design" />
      </h2>
      <div className={styles.card}>
        <img src={studentImg} alt="Student" className={styles.image} />
        <div className={styles.info}>
          <h4>Justin Case</h4>
          <span className={styles.role}>Student</span>
          <p className={styles.text}>
            Nulla porttitor accumsan tincidunt. Vamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Curabitur non nulla sit amet
            nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut
            lacinia in.
          </p>
          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={starIcon} alt="star" />
            ))}
            <span className={styles.score}>4.9</span>
            <span className={styles.reviews}>(14 Reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
