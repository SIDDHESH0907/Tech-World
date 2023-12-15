import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisibility(!isNavbarVisible);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">TechWorld</Link>
        </div>
        <div className="navbar-mid" onClick={toggleNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`navbar-right ${isNavbarVisible ? "visible" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="navbar-hr" />
    </>
  );
}

export default Navbar;
