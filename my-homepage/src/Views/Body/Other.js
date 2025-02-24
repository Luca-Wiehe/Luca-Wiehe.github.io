import React from 'react';
import './Other.css';

const Other = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "Academic Excellence",
      description: "Completed Bachelor's degree with 239/180 ECTS and final grade of 1.5",
      date: "2023"
    },
    {
      icon: "🎓",
      title: "Abitur Excellence",
      description: "Graduated with grade average of 1.0 from Sophie-Barat-Schule",
      date: "2019"
    },
    {
      icon: "🏅",
      title: "Harvard Table Tennis Team",
      description: "Member of the Harvard University Table Tennis Team",
      date: "2022"
    },
    {
      icon: "🎵",
      title: "Music & Arts",
      description: "Participated in Jazz Orchestra and school choir",
      date: "2011-2019"
    }
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "Java", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Machine Learning", level: 90 },
    { name: "Computer Vision", level: 85 },
    { name: "Robotics", level: 80 },
    { name: "NLP", level: 85 }
  ];

  const languages = [
    { name: "German", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Intermediate" },
    { name: "Swedish", level: "Basic" }
  ];

  return (
    <div className="other-page">
      <div className="page-header">
        <h1 className="page-title">Beyond Robotics</h1>
        <p className="page-subtitle">
          The diverse experiences that inform my approach to robotics research
        </p>
      </div>
      
      <div className="other-container">
        <section className="achievements-section">
          <h2 className="section-title">Notable Milestones</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                  <div className="achievement-date">{achievement.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <h2 className="section-title">Technical Capabilities</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="languages-section">
          <h2 className="section-title">Languages</h2>
          <div className="languages-grid">
            {languages.map((language, index) => (
              <div key={index} className="language-card">
                <h3>{language.name}</h3>
                <div className="language-level">{language.level}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="interests-section">
          <h2 className="section-title">Formative Experiences</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">🏓</div>
              <h3>Table Tennis</h3>
              <p>Exploring discipline, strategy, and rapid decision-making through competitive play</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">🎵</div>
              <h3>Music</h3>
              <p>Understanding collaborative creation and the intersection of structure and improvisation</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">🚣</div>
              <h3>Rowing</h3>
              <p>Learning coordination, rhythm, and collective effort through synchronized movement</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">🌍</div>
              <h3>Travel</h3>
              <p>Examining different approaches to knowledge and understanding across cultural contexts</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Other;