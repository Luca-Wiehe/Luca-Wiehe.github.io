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
                {pub.pdf && (
                  <a href={pub.pdf} className="action-button secondary" target="_blank" rel="noopener noreferrer">
                    <span>PDF</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                {pub.code && (
                  <a href={pub.code} className="action-button" target="_blank" rel="noopener noreferrer">
                    <span>Code</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
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
      </div>
      
      <div className="publications-container">
        {renderPublicationSection('Conference Papers', conferencePublications)}
        {renderPublicationSection('Workshop Papers', workshopPublications)}
        {renderPublicationSection('Unpublished Work', unpublishedPublications)}
      </div>
    </div>
  );
};

export default Publications;