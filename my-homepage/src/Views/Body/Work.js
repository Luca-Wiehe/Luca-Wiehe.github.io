import Timeline from '../../UiComponents/Timeline';
import workData from '../../Constants/work.json';

const Work = () => {
   const workWithJSX = workData.work.map(entry => ({
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
         <Timeline title="Work Experience" entries={workWithJSX} />
      </>
   );
};

export default Work;
