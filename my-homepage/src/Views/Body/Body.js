import React from 'react';
import './Body.css';
import KpiGrid from './KpiGrid.js';
import Projects from './Projects.js';

const Body = () => {
  return (
    <div className="overview">
      <div className="overview-grid">
        <div className="overview-cell left">
          <Projects />
        </div>
        <div className="overview-cell right">
          <KpiGrid />
        </div>
      </div>
    </div>
  );
};

export default Body;