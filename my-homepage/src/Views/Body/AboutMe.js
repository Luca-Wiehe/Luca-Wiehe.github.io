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
            <h2 className="hero-subtitle">
              Robotics Researcher
            </h2>
            <p className="hero-description">
              Investigating how robots can perceive their environment, understand human 
              language, and act meaningfully in the physical world. Currently exploring 
              these questions through my Master's studies in Robotics, Cognition, Intelligence at TUM.
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
        <div className="content-section">
          <h3>My Story</h3>
          <p>
            My research stems from a fundamental curiosity about how robots can bridge 
            the gap between digital computation and physical reality—how they can see 
            and understand their surroundings, comprehend human communication, and 
            perform meaningful actions in the world.
          </p>
          <p>
            At the Technical University of Munich, my Master's research in Robotics, 
            Cognition, Intelligence focuses on developing robotic systems that can 
            perceive through vision, understand through language, and act with purpose 
            in complex physical environments.
          </p>
        </div>
        
        <div className="skills-section">
          <h3>Research Focus</h3>
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