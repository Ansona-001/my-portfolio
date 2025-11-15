import React from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="flex items-center">
            <h1 className="hidden md:block navbar-brand">Ansona Andrews</h1>
            <h1 className="block md:hidden navbar-brand">AA</h1>
          </div>
          <div className="navbar-links">
            <a href="#home" className="navbar-link">
              Home
            </a>
            <a href="#skills" className="navbar-link">
              Skills
            </a>
            <a href="#experience" className="navbar-link">
              Experience
            </a>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
