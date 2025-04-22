import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-image-wrapper">
              <img 
                src="/images/profile-image.jpg" 
                alt="Profile" 
                className="profile-image"
              />
              <div className="profile-ring"></div>
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Luca Wiehe</span>
            </h1>
            <p className="hero-description">
              I'm a Robotics Master's Student at TU Munich, currently visiting Oxford VGG for my Master's Thesis
            </p>
            
            <div className="social-links">
              <a href="https://github.com/Luca-Wiehe" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/logos/github-mark-white.png" alt="GitHub" className="social-icon" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/lucawiehe/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/logos/linkedin-logo.png" alt="LinkedIn" className="social-icon" />
                LinkedIn
              </a>
              <a href="https://scholar.google.com/citations?user=hrh-irUAAAAJ" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/logos/scholar-logo.png" alt="Google Scholar" className="social-icon" />
                Google Scholar
              </a>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="about-content">
        
        <div className="skills-section">
          <h3>Research Interests</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🤖</div>
              <h4>Autonomous Robotics</h4>
              <p>Developing robots that can operate independently in complex environments</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">👁️</div>
              <h4>Robot Vision</h4>
              <p>Enabling robots to see, understand, and navigate their visual environment</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💬</div>
              <h4>Human-Robot Communication</h4>
              <p>Investigating how robots can understand and respond to human language</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🦾</div>
              <h4>Robot Manipulation</h4>
              <p>Developing dexterous robotic systems for complex physical tasks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;