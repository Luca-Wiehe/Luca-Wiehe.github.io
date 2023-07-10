import React from 'react';
import './Projects.css';
import projects from '../../Constants/projects.json';

const Projects = () => {
   const projectList = Object.entries(projects);

   console.log(projectList);

   return (
      <>
         <div className="projects-header">
            <h1>Projects</h1>
         </div>
         <div className="projects-container">
            <ul>
               {
                  projectList.map((project, idx) => (
                     <li 
                        key={`preview-item-${idx}`} className={`${project[1].repositoryLink === "" ? "disabled" : "enabled"}`}
                        onClick={() => window.open(project[1].repositoryLink)}
                     >
                        <h2>{project[0]}</h2>
                        <p>{project[1].description}</p>
                        <div 
                           className={`project-preview`}
                           style={{
                              background: `url("${process.env.PUBLIC_URL}/images/${project[1].src}") no-repeat center/cover`, 
                              aspectRatio: "16/9"
                           }} 
                        />
                        <button 
                           disabled={project[1].repositoryLink === ""}
                           onClick={() => window.open(project[1].repositoryLink)}
                        >
                           {project[1].repositoryLink === "" ? <>Repository unavailable for legal reasons</> : <>View Repository &gt;</>}
                        </button>
                     </li>
               ))}
            </ul>
         </div>
      </>
   );
}

export default Projects;