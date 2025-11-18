import React from 'react';
import styles from './Welcome.module.css';
import studentGroup from '../../assets/welcome-1.png';
import universityImg from '../../assets/welcome-2.png';
import message from '../../assets/message.png';

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.left}>
        <img src={studentGroup} alt="Students" className={styles.mainImg} />
        <img src={universityImg} alt="University" className={styles.overlayImg} />
      </div>
      <div className={styles.right}>
        <h2>
          Welcome to <br />
          <span>Echooling LMS Platform</span>
        </h2>
        <p className={styles.tagline}>
          Education is both the act of teaching knowledge to others and <br />
          the act of receiving knowledge from someone else.
        </p>
        <p className={styles.guide}>
          Have questions? <a href="#">Get Free Guide</a>
        </p>
        <hr className={styles.divider} />
        <p className={styles.description}>
          Education also refers to the knowledge received through schooling instruction <br />
          and to the institution of teaching as a whole. The main purpose of education <br />
          is the integral development of a person.
        </p>
        <div className={styles.bottomRow}>
          <button className={styles.readMore}>Read More →</button>
          <div className={styles.supportBox}>
              <img src={message} alt="Support Icon" className={styles.chatIcon} />

            <div>
              <div className={styles.supportText}>Get Support</div>
              <strong className={styles.email}>support@react.com</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
