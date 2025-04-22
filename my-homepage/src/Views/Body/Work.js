import React from 'react';
import WorkTimeline from '../../UiComponents/WorkTimeline';
import workData from '../../Constants/work.json';
import './Work.css';

const Work = () => {
  // Transform work data to match timeline format
  const transformedWorkData = workData.work.map(item => ({
    ...item,
    img: `logos/${item.src}`,
    organization: item.organization
  }));

  return (
    <div className="work-page">
      <div className="page-header">
        <h1 className="page-title">Work Experience</h1>
      </div>
      
      <WorkTimeline data={transformedWorkData} />
    </div>
  );
};

export default Work;