import React, {useState, useEffect} from 'react';
import './Projects.css';
import projects from '../../Constants/projects.json';
import { MdNavigateNext as NextIcon } from 'react-icons/md';

const Projects = () => {
   const projectList = Object.entries(projects);
   const [currentProject, setCurrentProject] = useState(0);
   const [imageArray, setImageArray] = useState(projectList[currentProject][1]["src"].split(','));
   const [backgroundImage, setBackgroundImage] = useState(imageArray[0]);

   useEffect(() => {
      // introducing a temp variable creates invariance for execution order
      const tempImageArray = projectList[currentProject][1]["src"].split(',')
      setImageArray(tempImageArray);
      setBackgroundImage(tempImageArray[0]);  
      // eslint-disable-next-line
    }, [currentProject])

   useEffect(() => {
      const interval = setInterval(() => {
        const currentImage = (imageArray.indexOf(backgroundImage) + 1) % imageArray.length;
        setBackgroundImage(imageArray[currentImage]);
      }, 3000);
      return () => clearInterval(interval);
    }, [backgroundImage, imageArray]);

   return (
      <div className="projects-wrapper">
         <div className="projects-header">Projects</div>
         <div className="projects-body">
            <div 
               className="project-preview" 
               style={{
                  background: `url("${process.env.PUBLIC_URL}/images/${backgroundImage}") no-repeat center/cover`, 
                  aspectRatio: "16/9"
               }} 
            ></div>
            <div className="project-information"
               style={{
                  background: `${projectList[currentProject][1]["backgroundStyle"]}`
               }}
            >
               <span className="project-year">{projectList[currentProject][1]["year"]}</span>
               <span className="project-title">{projectList[currentProject][0]}</span>
               <div className="project-description">
                  <h4>Goal</h4>
                  <p>{projectList[currentProject][1]["goal"]}</p>
                  <h4>Description</h4>
                  <p>{projectList[currentProject][1]["description"]}</p>
                  <h4>Languages</h4>
                  <p>{projectList[currentProject][1]["languages"]}</p>
               </div>
            </div>
            <button className="btn-small prev" onClick={() => {setCurrentProject((currentProject + projectList.length - 1) % projectList.length);}}>
               <NextIcon />
            </button>
            <button className="btn-small next" onClick={() => {setCurrentProject((currentProject + 1) % projectList.length)}}>
               <NextIcon />
            </button>
         </div>
      </div>
   );
}

export default Projects;