import React from 'react';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="header">
        <input type="checkbox" id="isChecked" />
        <label for="isChecked" className="bar-toggle">
          <i class="fa-solid fa-bars"></i>
        </label>
        <h2>
          PORT<span className="highlighted-text">FOLIO</span>
        </h2>
        <ul className="menu-items">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About Me</li>
          </a>
          <a href="#resume">
            <li>Resume</li>
          </a>
          <a href="#achievements">
            <li>Project Demo</li>
          </a>
          <a href="#contactme">
            <li>Contact Me</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
