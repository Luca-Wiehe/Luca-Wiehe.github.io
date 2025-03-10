import React from 'react';
import projectsData from '../../Constants/projects.json';
import './Projects.css';

const Projects = () => {
  // Transform projects data to array format
  const projectsArray = Object.entries(projectsData).map(([name, data]) => ({
    name,
    ...data,
    img: data.img || data.src
  }));

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1 className="page-title">Fun Projects</h1>
        <p className="page-subtitle">
          Developing robotic systems with advanced vision, language understanding, and manipulation capabilities
        </p>
      </div>
      
      <div className="projects-container">
        <div className="projects-grid">
          {projectsArray.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={`/images/projects/${project.img}`} 
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-year">{project.year}</div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                
                {project.languages && (
                  <div className="project-tech">
                    <span className="tech-tag">{project.languages}</span>
                  </div>
                )}
                
                <div className="project-actions">
                  {project.repositoryLink && (
                    <a 
                      href={project.repositoryLink} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor"/>
                      </svg>
                      View Code
                    </a>
                  )}
                  <button className="project-link secondary">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Projects;