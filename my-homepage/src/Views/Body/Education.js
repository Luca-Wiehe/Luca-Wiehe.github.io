import React from 'react';
import AnimatedTimeline from '../../UiComponents/AnimatedTimeline';
import educationData from '../../Constants/education.json';
import './Education.css';

const Education = () => {
  return (
    <div className="education-page">
      <div className="page-header">
        <h1 className="page-title">Academic Formation</h1>
        <p className="page-subtitle">
          Intellectual development through diverse scholarly environments
        </p>
      </div>
      
      <AnimatedTimeline data={educationData.education} type="education" />
    </div>
  );
};

export default Education;