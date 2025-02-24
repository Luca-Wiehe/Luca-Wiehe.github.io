import React, { useEffect, useState } from 'react';
import './AnimatedTimeline.css';

const AnimatedTimeline = ({ data, type }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);

      // Check which items should be visible
      const timelineItems = document.querySelectorAll('.timeline-item');
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
    const timelineElement = document.querySelector('.animated-timeline');
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
    <div className="animated-timeline">

      <div className="timeline-items">
        {data.map((item, index) => {
          const isVisible = visibleItems.has(index);
          const isCompleted = getTimelineProgress() > (index / data.length);
          const isLeft = index % 2 === 0;
          
          return (
            <div
              key={index}
              className={`timeline-item ${isLeft ? 'left' : 'right'} ${isVisible ? 'visible' : ''} ${isCompleted ? 'completed' : ''}`}
              style={{
                '--item-index': index,
                '--total-items': data.length
              }}
            >
              {/* Building Side */}
              <div className="building-container">
                <div className="building-marker">
                  <img 
                    src={`/images/${item.img}`} 
                    alt={item.organization}
                    className="building-3d-icon"
                  />
                </div>
              </div>
              
              
              {/* Card Side */}
              <div className="card-container">
                <div className="timeline-content-card">
                  <div className="card-3d">
                    <div className="card-content">
                      <div className="card-header">
                        <h3 className="organization-name">{item.organization}</h3>
                        <span className="date-badge">{item.start} - {item.end}</span>
                      </div>
                      
                      <div className="card-body">
                        <h4 className="title">{item.title}</h4>
                        <span className="type-badge">{item.type}</span>
                        <div 
                          className="description"
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

export default AnimatedTimeline;