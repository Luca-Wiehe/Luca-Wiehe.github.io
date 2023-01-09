import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage, label, description }) => {
   const [isExpanded, setExpanded] = useState(false);

  return (
   <div>
      <div className={`progress-bar-container ${isExpanded ? 'progress-bar-container-expanded' : ''}`}>
         <div className="progress-bar-wrapper">
            <div className="progress-bar" style={{ width: `${percentage * 100}%` }} />
         </div>
         <span className="progress-bar-label">{label}</span>
         <span className="details-label" onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Collapse' : 'Expand'}</span>
         {isExpanded && (
            <div className="progress-bar-description">
               {description}
            </div>
         )}
      </div>
   </div>
  );
};

export default ProgressBar;
