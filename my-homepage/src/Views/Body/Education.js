import Timeline from "../../UiComponents/Timeline";
import educationData from "../../Constants/education.json";

const Education = () => {
   const educationWithJSX = educationData.education.map(entry => ({
      ...entry,
      description: entry.description.includes('<span') ? (
         <>
            {entry.description.split(/<span.*?>|<\/span>/).map((text, i) =>
               i % 2 === 0 ? text : <span key={i} className="highlight">{text}</span>
            )}
         </>
      ) : entry.description
   }));

   return (
      <>
         <Timeline title="Education" entries={educationWithJSX} />
      </>
   );
};

export default Education;
