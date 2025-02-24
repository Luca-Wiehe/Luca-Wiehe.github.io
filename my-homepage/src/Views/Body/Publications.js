import React from 'react';
import publicationsData from '../../Constants/publications.json';
import './Publications.css';

const Publications = () => {
  const conferencePublications = publicationsData.publications.filter(pub => pub.type === 'Conference');
  const workshopPublications = publicationsData.publications.filter(pub => pub.type === 'Workshop');
  const unpublishedPublications = publicationsData.publications.filter(pub => pub.type === 'Unpublished');

  const renderPublicationSection = (title, publications) => {
    if (publications.length === 0) return null;
    
    return (
      <div className="publication-section">
        <h2 className="section-title">{title}</h2>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div key={index} className="publication-card">
              <div className="publication-header">
                <div className="publication-type">{pub.type}</div>
                <div className="publication-year">{pub.year}</div>
              </div>
              
              <h3 className="publication-title">{pub.title}</h3>
              <p className="publication-authors">{pub.authors}</p>
              <p className="publication-venue">{pub.venue}</p>
              
              <div className="publication-abstract">
                <p>{pub.abstract}</p>
              </div>
              
              <div className="publication-tags">
                {pub.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="publication-actions">
                <a href={pub.link} className="action-button">
                  <span>View Details</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="publications-page">
      <div className="page-header">
        <h1 className="page-title">Research</h1>
        <p className="page-subtitle">
          Advancing the frontiers of robotics through vision, language, and autonomous behavior research
        </p>
      </div>
      
      <div className="publications-container">
        {renderPublicationSection('Conference Papers', conferencePublications)}
        {renderPublicationSection('Workshop Papers', workshopPublications)}
        {renderPublicationSection('Unpublished Work', unpublishedPublications)}
        
        <div className="research-interests">
          <h2>Research Interests</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <div className="interest-icon">🤖</div>
              <h4>Autonomous Robotics</h4>
              <p>Developing robots capable of independent operation in complex environments</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">👁️</div>
              <h4>Computer Vision for Robotics</h4>
              <p>Enabling robots to perceive, understand, and navigate their visual environment</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">💬</div>
              <h4>Natural Language for Robots</h4>
              <p>Developing robotic systems that can understand and respond to human language</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🦾</div>
              <h4>Robot Manipulation</h4>
              <p>Advancing dexterous robotic manipulation and interaction with physical objects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;