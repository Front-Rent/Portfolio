import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <h1>Portfolio.</h1>

      <nav>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="#Home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#About" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#Projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <IoMenu className="menu" onClick={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
