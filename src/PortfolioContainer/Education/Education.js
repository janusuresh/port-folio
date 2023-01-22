import React from 'react';
import data from '../../data';

export default function Education() {
  return (
    <div className="education">
      <ul className="education-list">
        {data.education.map((data) => (
          <li>
            <div className="edu-list1">
              <div className="edu-list2">
                <div className="edu-list3">{data.name}</div>
                <div className="edu-list4">
                  {data.course} - {data.percentage}
                </div>
              </div>
              <button className="btn btn-primary edu-list5">{data.year}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
