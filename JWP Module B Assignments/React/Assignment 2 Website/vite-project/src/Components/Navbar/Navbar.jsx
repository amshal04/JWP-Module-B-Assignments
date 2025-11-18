// import React from "react";
// import styles from "./Navbar.module.css";

// function Navbar() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.container}>
//         {/* Logo */}
//         <div className={styles.logo}>Echooling</div>

//         {/* Navigation Links */}
//         <nav className={styles.navLinks}>
//           <a href="/">Home</a>
//           <a href="/courses">Courses</a>
//           <a href="/about">About</a>
//           <a href="/contact">Contact</a>
//         </nav>

//         {/* Auth Buttons */}
//         <div className={styles.authButtons}>
//           <a href="/signin" className={styles.signIn}>Sign In</a>
//           <a href="/signup" className={styles.signUp}>Sign Up</a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;












import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className={styles.topbar}>
        <div className={styles.leftTopbar}>
          <span>(+1) 3344 999 999</span>
          <span>info@reachtheme.com</span>
        </div>
        <div className={styles.rightTopbar}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            F
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            T
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            in
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={styles.navbar}>
        <div className={styles.logo}>Echooling.</div>

        <nav className={styles.links}>
          <a href="/">Home ▾</a>
          <a href="/pages">Pages ▾</a>
          <a href="/courses">Courses ▾</a>
          <a href="/blog">Blog ▾</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className={styles.searchBox}>
          <input type="text" placeholder="Search Course" />
          <button>🔍</button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
