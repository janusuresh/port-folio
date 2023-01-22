import React from 'react';
import data from '../data';
import './Programming.css';
import ProgressBar from './ProgressBar';
export default function Programming() {
  return (
    <div className="education skills">
      <div className="programskills-body">
        {data.programming.map((data) => (
          <div className="div-program">
            {data.name}
            <ProgressBar pro={data.percentage}></ProgressBar>
          </div>
        ))}
      </div>
    </div>
  );
}
