import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login clicked with:", { email, password });
  };

  return (
    <>
      <div className="login-container">
      
        <div className="login-form">
        <h1 className="login-from-title">Login Form</h1>

          <form onSubmit={handleLogin}>
            <label className="login-email">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label className="login-password">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <div className="login-form-btn">
              <button type="submit">Login</button>
              <Link to="/register">
                <button type="submit">Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
