import React from 'react';
import socialsData from '../Constants/socials.json';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <h3>Luca Wiehe</h3>
              <p>Robotics Student</p>
            </div>
            
            <div className="footer-description">
              <p>
                Passionate about advancing artificial intelligence and robotics through 
                cutting-edge research and innovative applications. Let's connect and explore 
                the future of technology together.
              </p>
            </div>
          </div>
          
          <div className="footer-socials">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {Object.entries(socialsData).map(([platform, data]) => (
                <a
                  key={platform}
                  href={data.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={`${platform}: ${data.username}`}
                >
                  <img 
                    src={`/images/logos/${data.src}`} 
                    alt={platform}
                    className="social-icon"
                  />
                  <span className="social-text">
                    <strong>{platform}</strong>
                    <small>{data.username}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 Luca Wiehe. All rights reserved.</p>
          </div>
          <div className="footer-tech">
            <p>Built with React, HTML, and CSS</p>
          </div>
        </div>
      </div>
      
      <div className="footer-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
      </div>
    </footer>
  );
};

export default Footer;