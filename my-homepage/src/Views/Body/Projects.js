import React, { useEffect } from 'react';
import './Projects.css';
import projects from '../../Constants/projects.json';

const Projects = () => {
   const projectList = Object.entries(projects);

   const handleMouseMove = (e) => {
      const { currentTarget : target} = e;

      const rect = target.getBoundingClientRect(), 
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

      target.style.setProperty('--mouse-x', `${x}px`);
      target.style.setProperty('--mouse-y', `${y}px`);
   }

   // initialize listeners when loading for the first time
   useEffect(() => {
      for(const projectItem of document.querySelectorAll(".enabled")){
         projectItem.onmousemove = e => handleMouseMove(e);
      }
   }, []);

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
                        onClick={() => {
                           if (project[1].repositoryLink !== ""){
                              window.open(project[1].repositoryLink);
                           }
                        }}
                     >
                        <div 
                           className={`project-preview`}
                           style={{
                              background: `url("${process.env.PUBLIC_URL}/images/${project[1].src}") no-repeat center/cover`, 
                              aspectRatio: "16/9"
                           }} 
                        />
                        <h2>{project[0]}</h2>
                        <p>{project[1].description}</p>
                        <button 
                           disabled={project[1].repositoryLink === ""}
                           onClick={() => window.open(project[1].repositoryLink)}
                        >
                           {project[1].repositoryLink === "" ? <>Repository Unavailable</> : <>View Repository &gt;</>}
                        </button>
                     </li>
               ))}
            </ul>
         </div>
      </>
   );
}

export default Projects;