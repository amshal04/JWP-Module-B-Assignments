import React from "react";
import styles from "./Hero.module.css";
import bg from "../../assets/Hero-section.jpg";
import video from "../../assets/video.png";

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <p className={styles.badge}>Great Quality Cocial life</p>
          <h1 className={styles.title}>
            Discover the world of <br /> possible university.
          </h1>
          <div className={styles.actions}>
            <button className={styles.admissionBtn}>Admissions</button>
            <div className={styles.video}>
              <img src={video} alt="Play" className={styles.playImage} />
              <div className={styles.videoText}>
                <strong>Watch Video</strong><br />
                Intro
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
