import React from 'react';
import Line from '../Line/Line';
import './Contact.css';
import Forms from '../Forms/Forms';
import Arrow from '../../Arrow/Arrow';
import Footer1 from '../../Footer1/Footer1';
export default function Contact() {
  return (
    <div id="contactme" className="about">
      <div className="about-details">
        <h2>Contact Me</h2>
        <h5>Let Keep in touch</h5>
        <Line />
      </div>
      <div className="flexy-content">
        <div className="flex-contact-me ">
          <div className="contactme">
            <div className="heading">
              <h1>Get In Touch</h1>
            </div>
            <div className="brands-logo">
              <div className="brands-logo1">
                <ul className="brands-logo-list">
                  <li>
                    <a href="https://www.linkedin.com/in/janupritha-suresh-2723bb221">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href=" https://github.com/janusuresh">
                      {' '}
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="email-help">
              <h3>Send Your Email Here !</h3>
            </div>
            <div className="contactme-image-containers">
              <img
                src={require('../Assesst/mailz.jpeg')}
                alt="no_internet_connection"
              />
            </div>
          </div>
          <div className="forms">
            <Forms />
          </div>
        </div>
        <div className="arrows">
          <Arrow />
        </div>
      </div>
      <div>
        <Footer1 />
      </div>
    </div>
  );
}
