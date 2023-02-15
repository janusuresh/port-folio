import React, { useState } from 'react';
import './Achievements.css';
import Line from '../Line/Line';
export default function Achievements() {
  const [action, setAction] = useState('1');
  return (
    <div id="achievements" className="about">
      <div className="about-details">
        <h2>Project Demo</h2>
        <h5>What I Did?</h5>
        <Line />
      </div>
      <div className="achieves">
        <div className="controller">
          <div onClick={(e) => setAction('1')}>
            <div
              id="carousel-slider"
              className={action === '1' ? 'actives' : ''}
            ></div>
          </div>
          <div onClick={(e) => setAction('2')}>
            {' '}
            <div
              id="carousel-slider"
              className={action === '2' ? 'actives' : ''}
            ></div>
          </div>
        </div>

        <div className="achievements">
          {action === '1' && (
            <div className="achievements-div1">
              <div className="coding-1">
                <img src={require('../Assesst/image-1.PNG')} alt="name" />
              </div>
              <div className="coding-2">
                <div className="des-btsn">
                  <span className="descrip">
                    MY KEC is a website developed to maintain the Student
                    Activity Points,Events and Circulars. HTML, CSS, JS are used
                    to make live UI. PHP & MYSQL to handle and manage the data.
                  </span>
                  <div>
                    <a href="https://mykec.kongu.edu/">
                      {' '}
                      <button className="btn btn-primary bts live">
                        Live Demo
                      </button>
                    </a>

                    <button className="btn btn-primary bts code">Code</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {action === '2' && (
            <div className="achievements-div1">
              <div className="coding-1">
                <img src={require('../Assesst/image-2.PNG')} alt="name" />
              </div>
              <div className="coding-2">
                <div className="des-btsn">
                  <span className="descrip">
                    Amazona is a e-commerce website to buy products.(MERN -
                    FRAMEWORK) React JS used for front end framework. Node JS
                    used to connect to the server. MongoDB is used to store the
                    data.
                  </span>
                  <div>
                    <button className="btn btn-primary bts live">
                      Live Demo
                    </button>
                    <button className="btn btn-primary bts code">Code</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {action === '3' && (
            <div className="achievements-div3">
              <div className="coding-1">
                <h4>Coding3</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
