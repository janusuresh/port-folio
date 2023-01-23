import React from 'react';
import './Footer1.css';
export default function Footer1() {
  return (
    <div className="footer1">
      <div className="footer-child">
        <h3>JANUPRITHA</h3>
        <ul className="footersUl">
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
        <div className="emails">
          <span>
            <i class="fa-solid fa-envelope"></i> janupritha@gmail.com
          </span>
        </div>
        <div className="phonenumber">
          <span>
            <i class="fa-solid fa-phone"></i> +91 87780-76085
          </span>
        </div>
        <div className="reserved">
          <span>&copy;Janupritha, All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
