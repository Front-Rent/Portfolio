import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Roma All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
