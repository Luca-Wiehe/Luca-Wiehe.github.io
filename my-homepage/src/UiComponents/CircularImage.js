import React from 'react';
import './CircularImage.css';

const CircularImage = (props) => {
  return (
    <div className="circular-image-frame">
      <img src={props.src} alt={props.alt} className="circular-image" />
    </div>
  );
};

export default CircularImage;