import Timeline from "../../UiComponents/Timeline";

const all_education = [
   {
      "src": "tum_logo.svg",
      "start": "10/2019",
      "end": "03/2023",
      "organization": "Technical University of Munich",
      "title": "Management & Technology",
      "type": "B.Sc.",
      "description": <>Throughout my bachelor's degree, I have completed <span className='highlight'>239/180 ECTS</span> with a final grade of <span className='highlight'>1.5</span>. These credits comprise 102 ECTS in Computer Science, 33.5 ECTS in Mathematics, 91.5 ECTS in Business and Economics, and 12 ECTS in other subjects. In my thesis, I used an NLP-based approach to analyze the interdisciplinarity of European researchers.</>
   },
   {
      "src": "harvard_logo.svg",
      "start": "08/2022",
      "end": "12/2022",
      "organization": "Harvard University",
      "title": "Computer Science",
      "type": "Semester Abroad",
      "description": <>I spent a semester abroad at Harvard University as a Visiting Undergraduate Student. During my time at Harvard, I have taken courses such as <span className='highlight'>Unsupervised Learning</span> and <span className='highlight'>Algorithms and their Limitations</span>. Additionally, I was part of the <span className='highlight'>Harvard Table Tennis Team</span>.</>
   },
   {
      "src": "lund_logo.svg",
      "start": "08/2021",
      "end": "01/2022",
      "organization": "Lund University",
      "title": "Computer Science",
      "type": "Semester Abroad",
      "description": <>I spent a semester abroad at Lund University through the Erasmus+ program. Throughout the semester, I have taken courses such as <span className='highlight'>Constraint Programming</span> and <span className='highlight'>Language Technology</span>.</>
   },
   {
      "src": "sbs_logo.svg",
      "start": "06/2011",
      "end": "06/2019",
      "organization": "Sophie-Barat-Schule",
      "title": "Physics Profile",
      "type": "Abitur",
      "description": <>I completed my Abitur (High School Diploma) with a <span className='highlight'>grade average of 1.0</span>. During my school time, I participated in several <span className='highlight'>extracurricular activities</span> such as the school's rowing team, the Jazz Orchestra, and the school choir.</>
   }
]

const Education = () => {
   return (
      <>
         <Timeline title="Education" entries={all_education} />
      </>
  );
};

export default Education;
