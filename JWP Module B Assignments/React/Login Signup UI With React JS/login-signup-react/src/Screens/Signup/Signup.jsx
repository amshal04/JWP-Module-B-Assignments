
import React, { useState } from "react";
import styles from "./Signup.module.css";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = ({ toggleForm }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${form.firstName} ${form.lastName}!`);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Left Section */}
        <div className={styles.left}>
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputWrapper}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputWrapper}>
              <FaEnvelope className={styles.icon} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputWrapper}>
              <FaLock className={styles.icon} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className={styles.signupBtn}>
              Create Account
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <h2>Welcome, Again</h2>
          <h4>Already have an account?</h4>
          <button className={styles.loginBtn} onClick={toggleForm}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
