import Timeline from "../../UiComponents/Timeline";

const all_awards = [
   {
      "src": "stusti_logo.svg",
      "start": "03/2021",
      "end": "today",
      "organization": "German Academic Scholarship Foundation",
      "title": "German National Merit Scholarship",
      "type": "Scholarship Holder",
      "description": <>Germany's largest, oldest and most prestigious scholarship foundation (&lt; 0.5% of German students being promoted). It promotes scholarship holders through summer schools, language courses as well as financial support (&gt; 300€/month, depending on financial background).</>
   },
   {
      "src": "tum_logo.svg",
      "start": "10/2020",
      "end": "08/2022",
      "organization": "Technical University of Munich",
      "title": "TUM: Junge Akademie",
      "type": "Scholarship Holder",
      "description": <>TUM: Junge Akademie is a 20-month scholarship program that connects the best students (~ 45 / 50,000) from the degree programs at TUM to <span className='highlight'>work on a joint research project with professors and PhDs</span> (~ 10 hours per week). During that time, we developed a platform that connects students based on their learning styles.</>
   },
   {
      "src": "jujazzt_logo.png",
      "start": "2015",
      "end": "2018",
      "organization": "German Music Council",
      "title": "Jugend Jazzt!",
      "type": "Several Prizes",
      "description": <>Throughout my time as a saxophonist, I have won <span className='highlight'>several first prizes</span> at the German Youth Jazz competition "Jugend Jazzt!". In 2018, I was awarded a special prize that allowed me to perform <span className='highlight'>my own big band composition</span> with the NDR Big Band.</>
   }
]


const Awards = () => {
   return (
      <>
         <Timeline title="Awards" entries={all_awards} />
      </>
  );
}

export default Awards;
