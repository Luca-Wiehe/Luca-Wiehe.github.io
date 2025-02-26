import React, { useEffect, useState } from 'react';
import './WorkTimeline.css';

const WorkTimeline = ({ data }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);

      // Check which items should be visible
      const timelineItems = document.querySelectorAll('.work-timeline-item');
      const newVisibleItems = new Set();
      
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          newVisibleItems.add(index);
        }
      });
      
      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTimelineProgress = () => {
    const timelineElement = document.querySelector('.work-timeline');
    if (!timelineElement) return 0;
    
    const rect = timelineElement.getBoundingClientRect();
    const elementTop = rect.top + window.pageYOffset;
    const elementHeight = rect.height;
    const windowTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    const progress = Math.max(0, Math.min(1, (windowTop + windowHeight - elementTop) / elementHeight));
    return progress;
  };

  return (
    <div className="work-timeline">
      <div className="work-timeline-items">
        {data.map((item, index) => {
          const isVisible = visibleItems.has(index);
          const isCompleted = getTimelineProgress() > (index / data.length);
          const isLeft = index % 2 === 0;
          
          return (
            <div
              key={index}
              className={`work-timeline-item ${isLeft ? 'left' : 'right'} ${isVisible ? 'visible' : ''} ${isCompleted ? 'completed' : ''}`}
              style={{
                '--item-index': index,
                '--total-items': data.length
              }}
            >
              <div className="work-card-container">
                <div className="work-timeline-content-card">
                  <div className="work-card-3d">
                    <div className="work-card-content">
                      <div className="work-card-header">
                        <div className="work-company-info">
                          <div className="work-company-logo-container">
                            <img 
                              src={`/images/${item.img}`} 
                              alt={item.organization}
                              className="work-company-logo"
                            />
                          </div>
                          <h3 className="work-organization-name">{item.organization}</h3>
                        </div>
                        <span className="work-date-badge">{item.start} - {item.end}</span>
                      </div>
                      
                      <div className="work-card-body">
                        <h4 className="work-title">{item.title}</h4>
                        <span className="work-type-badge">{item.type}</span>
                        <div 
                          className="work-description"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkTimeline;