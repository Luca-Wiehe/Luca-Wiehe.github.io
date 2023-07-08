import React from 'react';

import './NewBody.css';
import '../../style.css';

const all_jobs = [
   {
      "src": "mercedes_logo.svg",
      "start": "05/2023",
      "end": "09/2023",
      "organization": "Mercedes-Benz AG",
      "title": "Data Scientist",
      "type": "Internship",
      "description": <>During my internship, I was responsible for researching and implementing different statistical approaches in production planning. Those approaches include <span className='highlight'>Simulated Annealing</span> as well as <span className='highlight'>Reinforcement Learning</span> with both classical and <span className='highlight'>Graph Neural Networks</span>.</>
   },
   {
      "src": "tum_logo.svg",
      "start": "04/2022",
      "end": "10/2022",
      "organization": "Technical University of Munich",
      "title": "Teaching Assistant",
      "type": "Part Time",
      "description": <>As a Teaching Assistant for the course <span className='highlight'>Introduction to Software Engineering</span>, I was giving tutorials to several groups of ~25 students. Tutorials include brief summaries of lectures, working through exercises, answering questions regarding lecture contents, as well as correcting final exams.</>
   },
   {
      "src": "tum_logo.svg",
      "start": "01/2022",
      "end": "04/2022",
      "organization": "Technical University of Munich",
      "title": "Researcher",
      "type": "Project Student",
      "description": <>As a Project Student in the Chair for Economics of Innovation, I was working on a Recommender System for Academic Publications based on <span className='highlight'>Natural Language Processing</span>. This entailed creating <span className='highlight'>Word Embeddings</span> and classifying subjects of publications using methods from <span className="highlight">Supervised Learning</span>.</>
   },
   {
      "src": "tng_logo.svg",
      "start": "03/2021",
      "end": "08/2021",
      "organization": "TNG Technology Consulting GmbH",
      "title": "Software Developer",
      "type": "Internship",
      "description": <>During my internship, I developed a Jira plugin using <span className='highlight'>TypeScript</span> and <span className='highlight'>React.js</span>. The plugin analyzed requests of customers and gave answer suggestions based on past responses.</>
   }
]

const NewBody = () => {
   return (
      <>
         <div className="header-wrapper">
            <h1>Work Experience</h1>
         </div>
         <div className="timeline-container">
            <ul>
               {
                  all_jobs.map((job_dict, job_idx) => (
                     <li>
                        {job_idx === 0 && <div className="timeline-start" />}
                        <div className="occupation-icon-container">
                           <img 
                              src={`${process.env.PUBLIC_URL}/images/${job_dict.src}`} 
                              alt={job_dict.organization} 
                           />
                        </div>
                        <div className="occupation-organization">
                           <div className="date">
                              {job_dict.start} - {job_dict.end}
                           </div>
                           <h2>
                              {job_dict.organization}<br />
                              <span className="occupation-name">{job_dict.title} </span>
                              <span className="occupation-type">({job_dict.type})</span>
                           </h2>
                           <p className="occupation-description">{job_dict.description}</p>
                        </div>
                        {job_idx === all_jobs.length - 1 && <div className="timeline-end" />}
                     </li>
                  ))
               }
            </ul>
         </div>
      </>
  );
};

export default NewBody;