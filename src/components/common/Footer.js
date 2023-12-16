import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const iconSize = 25;
  const iconColor = "#172330";
  const githubLink = "https://github.com/SIDDHESH0907";
  const linkedinLink = "https://www.linkedin.com/in/siddhesh-gaonkar";
  const instagramLink = "https://www.instagram.com/siddhesh_gaonkar_0907";

  return (
    <>
      <hr className="footer-hr" />

      <div className="footer">
        <div className="footer-left">
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
          <div>About</div>
        </div>
        <div className="footer-mid">
          <div className="footer-icons">
            <Link to={instagramLink} target="_blank">
              <FaInstagram size={iconSize} style={{ color: iconColor }} />
            </Link>
          </div>
          <div className="footer-icons">
            <Link to={githubLink} target="_blank">
              <FaGithub size={iconSize} style={{ color: iconColor }} />
            </Link>
          </div>
          <div className="footer-icons">
            <Link to={linkedinLink} target="_blank">
              <FaLinkedin size={iconSize} style={{ color: iconColor }} />
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <div>Shipping Info</div>
          <div>Returns / Exchanges</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="footer-2023">@2023</div>
    </>
  );
}

export default Footer;
