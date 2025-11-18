import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Left Column */}
        <div className={styles.column}>
          <img src={logo} alt="Echooling Logo" className={styles.logo} />
          <p className={styles.description}>
There are course and event custom
post types so you can easily create and
manage course, events.          </p>
          <p>Email: info@echooling.com</p>
          <p>Phone: +(402) 762 441 83</p>
        </div>

        {/* About Us */}
        <div className={styles.column}>
          <h4 className={styles.heading}>About Us</h4>
          <ul className={styles.list}>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Become a Teacher</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Useful Links</h4>
          <ul className={styles.list}>
            <li><a href="#">Browse Library</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">News & Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Tutorials</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Newsletter</h4>
          <p>Get the latest Echooling news <br />
delivered to you inbox</p>
<input type="text" placeholder="Enter your email" />

        </div>
      </div>

      <div className={styles.bottom}>
        <p>2022 Echooling. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
