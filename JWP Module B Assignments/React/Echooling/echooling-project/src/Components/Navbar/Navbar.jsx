import React from "react";
import styles from "./Navbar.module.css";
import call from "../../assets/phone-call.png";
import email from "../../assets/email.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/navbar-logo.png";
import search from "../../assets/search-bar.png";

function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className={styles.topbar}>
        <div className={styles.leftTopbar}>
          <span>
            <img src={call} alt="Call" className={styles.icon} />
            (+1) 3344 999 999
          </span>
          <span>
            <img src={email} alt="Email" className={styles.icon} />
            info@reachtheme.com
          </span>
        </div>
        <div className={styles.rightTopbar}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={styles.navbar}>
        <div className={styles.logoSection}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        <nav className={styles.navLinks}>
          <div className={styles.dropdown}>
            <button className={`${styles.dropbtn} ${styles.active}`}>Home ▾</button>
            <div className={styles.dropdownContent}>
              <a href="#">Home One</a>
              <a href="#">Home Two</a>
              <a href="#">Home Three</a>
            </div>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Pages ▾</button>
            <div className={styles.dropdownContent}>
              <a href="#">About</a>
              <a href="#">Instructor</a>
              <a href="#">Profile</a>
              <a href="#">Login</a>
              <a href="#">Signup</a>
              <a href="#">Events</a>

            </div>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Courses ▾</button>
            <div className={styles.dropdownContent}>
              <a href="#">Course</a>
              <a href="#">Right Sidebar</a>
              <a href="#">Course List</a>
              <a href="#">Course Single</a>

            </div>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Blog ▾</button>
            <div className={styles.dropdownContent}>
              <a href="#">Blog</a>
              <a href="#">Blog Single</a>
            </div>
          </div>
          <a href="/contact">Contact</a>
        </nav>

        <div className={styles.searchBox}>
          <input type="text" placeholder="Search Course" />
          <button>
            <img src={search} alt="Search" />
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
