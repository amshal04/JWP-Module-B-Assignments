import React from 'react';
import logo from "../../assets/darazlogo.png";
import styles from "./Navbar.module.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <header className={styles.navbarWrapper}>
      {/* Top nav links */}
      <div className={styles.topNav}>
        <div className={styles.navLinks}>
          <a href="#">SAVE MORE ON APP</a>
          <a href="#">SELL ON DARAZ</a>
          <a href="#">HELP & SUPPORT</a>
          <a href="#">LOGIN</a>
          <a href="#">SIGN UP</a>
          <span className={styles.urduText}>زبان تبدیل کریں</span>
        </div>
      </div>

      {/* Bottom logo + search */}
      <div className={styles.bottomNav}>
        <img src={logo} alt="Daraz" className={styles.logoImage} />
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search in Daraz" />
          <button className={styles.searchBtn}>
            <AiOutlineSearch />
          </button>
        </div>
        <BsCart3 className={styles.cartIcon} />
      </div>
    </header>
  );
};

export default Navbar;
