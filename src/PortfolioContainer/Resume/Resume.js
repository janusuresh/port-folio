import React, { useState } from 'react';
import './Resume.css';
import Line from '../Line/Line';
import Education from '../Education/Education';
import Programming from '../../Programming/Programming';
import Projects from '../../Projects/Projects';

export default function Resume() {
  const [action, actionChange] = useState('1');

  return (
    <div id="resume" className="about-container">
      <div class="about-details">
        <h2>Resume</h2>
        <h5>My Format Bio Details</h5>
        <Line />
      </div>
      <div class="resume-lists-container">
        <div className="blocks">
          {action === '1' && <Education></Education>}
          {action === '2' && <Programming></Programming>}
          {action === '3' && <Projects></Projects>}
        </div>
        <div className="container">
          <div className="resume-logo">
            <ul className="list-resume">
              <li
                id="logo-font"
                onClick={(e) => actionChange('1')}
                className={action === '1' ? 'active1' : ' '}
              >
                <i class="fa-solid fa-school"></i>
              </li>

              <li
                id="logo-font"
                onClick={(e) => actionChange('2')}
                className={action === '2' ? 'active1' : ' '}
              >
                <i class="fa-solid fa-computer"></i>
              </li>

              <li
                id="logo-font"
                onClick={(e) => actionChange('3')}
                className={action === '3' ? 'active1' : ' '}
              >
                <i class="fa-solid fa-chart-column"></i>
              </li>
            </ul>
          </div>
          <div className="resume-desc">
            <ul className="description">
              <li
                onClick={(e) => actionChange('1')}
                id="logo-text"
                className={action === '1' ? 'active' : ' '}
              >
                Education
              </li>
              <li
                id="logo-text"
                onClick={(e) => actionChange('2')}
                className={action === '2' ? 'active' : ' '}
              >
                Programming Skills
              </li>

              <li
                id="logo-text"
                onClick={(e) => actionChange('3')}
                className={action === '3' ? 'active' : ' '}
              >
                Projects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
