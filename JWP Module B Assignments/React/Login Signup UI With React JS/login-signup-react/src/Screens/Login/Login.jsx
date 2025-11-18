import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ toggleForm }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back!`);
    setForm({ email: "", password: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Left Section */}
        <div className={styles.left}>
          <h1>Welcome</h1>
          <h4>Don't have an account ?</h4>
          <button className={styles.signupBtn} onClick={toggleForm}>
           Signup
          </button>

        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
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



<div className={styles.rememberRow}>
  <label className={styles.rememberLabel}>
    <input type="checkbox" className={styles.checkbox} />
    <span>Remember me</span>
  </label>
</div>


<button type="submit" className={styles.loginBtn}>
  LOGIN
</button>

<div className={styles.forgotPassword}>
  <a href="#">Forgot password?</a>
</div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
