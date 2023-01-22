import React from 'react';

export default function ProgressBar(props) {
  const parent = {
    width: '90%',
    backgroundColor: 'grey',
    margin: '1rem 1rem',
  };
  const child = {
    width: `${props.pro}%`,
    backgroundColor: 'orange',
    borderRadius: '0 4rem 4rem 0',
    textAlign: 'center',
  };
  return (
    <div style={parent} className="parent-div">
      <div style={child}>
        <span>{props.pro}%</span>
      </div>
    </div>
  );
}
