import React from 'react';
import './Aboutme.css';
import Line from '../Line/Line';
export default function Aboutme() {
  return (
    <div id="about" className="about">
      <div className="about-details">
        <h2>About Me</h2>
        <h5>Why Choose Me ?</h5>
        <Line />
      </div>
      <div className="aboutme-container">
        <div className="aboutme-profile">
          <img src={require('../Assesst/Profile.JPG')} alt="PROFILE PICTURE" />
        </div>
        <div className="profile-details-aboutme">
          <div className="abouts">
            <span className="about-span">
              Full Stack web development with background knowledge of MERN
              stacks with redux, along with Knack of building applications with
              utmost efficiency Strong professional development with MySQL using
              PHP
            </span>
          </div>
          <div className="highlighted-texts">
            <h3>Here are few highlights</h3>
            <ul className="list-highlights">
              <li>Full Stack Web Developer</li>
              <li>React</li>
              <li>MERN stack DEV</li>
            </ul>
          </div>
          <div className="buttons">
            <a href="#contactme">
              <button class="btn btn-primary bt">Hire Me</button>
            </a>
            <a href="Janupritha.pdf" download="Janupritha.pdf">
              <button class="btn btn-primary bt getresume">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
