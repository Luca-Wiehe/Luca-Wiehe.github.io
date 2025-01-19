import './Timeline.css';
import '../style.css';

import React from 'react';

const Timeline = ({ title, entries }) => {

   return (
      <>
         <div className="header-wrapper">
            <h1>{title}</h1>
         </div>
         <div className="timeline-container">
            <ul>
            {
               entries.map((entry, idx) => (
                  <li key={idx}>
                     {idx === 0 && <div className="timeline-start" />}
                     <div className="occupation-icon-container">
                     <img
                        src={`${process.env.PUBLIC_URL}/images/${entry.src}`}
                        alt={entry.organization}
                     />
                     </div>
                     <div className="occupation-organization">
                     <div className="date">
                        {entry.start} - {entry.end}
                     </div>
                     <h2>
                        {entry.organization}
                        <br />
                        <span className="occupation-name">{entry.title} </span>
                        <span className="occupation-type">({entry.type})</span>
                     </h2>

                     <div className="occupation-description-container">
                        <p className="occupation-description">{entry.description}</p>
                     </div>
                     </div>
                     {idx === entries.length - 1 && <div className="timeline-end" />}
                  </li>
               ))
            }
            </ul>
         </div>
      </>
  );
};

export default Timeline;
