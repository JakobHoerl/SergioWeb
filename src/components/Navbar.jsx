import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">MyBrand</div>
        <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
          <li>
            <Link to="/home" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/angebote" onClick={toggleMenu}>
              Angebote
            </Link>
          </li>
          <li>
            <Link to="/kontakt" onClick={toggleMenu}>
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              to="/preis-anfrage"
              onClick={toggleMenu}
              className="preis-anfrage"
            >
              Preis Anfrage
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
