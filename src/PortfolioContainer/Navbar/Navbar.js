import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
      <div className="navbar">
          <div className="header">
            <input type="checkbox" id="isChecked" />
            <label for="isChecked" className="bar-toggle"><i class="fa-solid fa-bars"></i>
            </label>
            <h2>PORT<span className="highlighted-text">FOLIO</span></h2>
            <ul className="menu-items">
                <li>Home</li>
                <li>About Me</li>
                <li>Resume</li>
                <li>Achievements</li>
                <li>Contact Me</li>
            </ul>
              
          </div>
    </div>
  )
}
