import React from 'react';
import data from '../data';

export default function Projects() {
  return (
    <div className="education">
      <ul className="education-list pro">
        {data.projects.map((data) => (
          <li>
            <div className="edu-list1">
              <div className="edu-list2">
                <div className="edu-list3">{data.name}</div>
                <div className="edu-list4 desp">{data.decription}</div>
              </div>
              <button className="btn btn-primary edu-list5">
                {data.frame}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
