import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';
import './Profile.css';
function Profile() {
  return (
    <div id="profileContainer" className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/janupritha-suresh-2723bb221">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/janusuresh">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {/* <a href=""><FontAwesomeIcon icon={faYoutube} /></a> */}
              {/* <a href=""><FontAwesomeIcon icon={faInstagram} /></a> */}
            </div>
          </div>
          <div className="profile-details-name">
            <div className="primary-text">
              {' '}
              Hello, I'M{' '}
              <span className="highlighted-text">Janupritha Suresh</span>
            </div>
          </div>

          <div className="profile-details-role">
            <span className="primary-text1">
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Enthusiastic Janu 😛',
                    2000,
                    'React Native Dev 😎',
                    2000,
                    'MERN Stack Dev 😈',
                    2000,
                  ]}
                />
              </h1>
            </span>
          </div>
          <div className="profile-role-tagline">
            <span>
              Knock of building applications with front and back end operations
            </span>
          </div>
          <div className="profile-options">
            <div className="button1">
              <a className="hire-me" href="#contactme">
                <button className="btn btn-primary bt1">Hire Me</button>
              </a>
            </div>{' '}
            <div className="button2">
              <a
                href="Janupritha.pdf"
                download="Janupritha.pdf"
                className="getResume"
              >
                <button className="btn btn-primary bt1">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
