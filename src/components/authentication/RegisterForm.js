import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    console.log("Register clicked with:", { email, password, confirmPassword });
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <form onSubmit={handleRegister}>
          <label className="register-email">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label className="register-password">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label className="register-confirm-password">
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <br />
          <div className="register-form-btn">
            <button type="submit">Login</button>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
