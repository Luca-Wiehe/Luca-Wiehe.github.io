import Timeline from '../../UiComponents/Timeline';

const all_jobs = [
   {
      "src": "mercedes_logo.svg",
      "start": "05/2023",
      "end": "09/2023",
      "organization": "Mercedes-Benz",
      "title": "Data Scientist",
      "type": "Internship",
      "description": <>During my internship, I am responsible for researching and implementing different statistical approaches in production planning. Those approaches include <span className='highlight'>Simulated Annealing</span> as well as <span className='highlight'>Reinforcement Learning</span> with both classical and <span className='highlight'>Graph Neural Networks</span>.</>
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
      "organization": "TNG Technology Consulting",
      "title": "Software Developer",
      "type": "Internship",
      "description": <>During my internship, I developed a Jira plugin using <span className='highlight'>TypeScript</span> and <span className='highlight'>React.js</span>. The plugin analyzed requests of customers and gave answer suggestions based on past responses. I participated in Workshops on <span className='highlight'>SLAM</span> and <span className='highlight'>Topics in Theoretical Computer Science</span>.</>
   },
   {
      "src": "rsm_logo.svg",
      "start": "09/2020",
      "end": "11/2020",
      "organization": "RSM Germany",
      "title": "IT Risk Advisor",
      "type": "Internship",
      "description": <>As an IT Risk Advisor, I was identifying weaknesses in companies' <span className='highlight'>IT Security</span> policies. I was also involved in research on reasons why <span className='highlight'>Ransomware</span>, a specific type of malware, is not included in companies' security planning.</>
   }
]

const Work = () => {
   return (
      <>
         <Timeline title="Work Experience" entries={all_jobs} />
      </>
  );
};

export default Work;
