import './Timeline.css';
import '../style.css';

const Timeline = ({ title, entries }) => {
   return (
      <>
         <div className="header-wrapper">
            <h1>{title}</h1>
         </div>
         <div className="timeline-container">
            <ul>
               {
                  entries.map((entry_dict, entry_idx) => (
                     <li key={entry_idx}>
                        {entry_idx === 0 && <div className="timeline-start" />}
                        <div className="occupation-icon-container">
                           <img 
                              src={`${process.env.PUBLIC_URL}/images/${entry_dict.src}`} 
                              alt={entry_dict.organization} 
                           />
                        </div>
                        <div className="occupation-organization">
                           <div className="date">
                              {entry_dict.start} - {entry_dict.end}
                           </div>
                           <h2>
                              {entry_dict.organization}<br />
                              <span className="occupation-name">{entry_dict.title} </span>
                              <span className="occupation-type">({entry_dict.type})</span>
                           </h2>
                           <p className="occupation-description">{entry_dict.description}</p>
                        </div>
                        {entry_idx === entries.length - 1 && <div className="timeline-end" />}
                     </li>
                  ))
               }
            </ul>
         </div>
      </>
  );
};

export default Timeline;
