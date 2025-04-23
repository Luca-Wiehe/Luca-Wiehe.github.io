import React from 'react';
import './Other.css';

const Other = () => {
  const interests = [
    {
      icon: "interest-saxophone.png",
      title: "Music",
      description: "I love playing the saxophone in jazz bands and rock combos. There's something magical about improvising with other musicians and creating something spontaneous together."
    },
    {
      icon: "interest-chess.png",
      title: "Chess",
      description: "I enjoy playing chess from time to time. It's a great way to challenge my mind and think strategically - plus it's always fun to outwit an opponent!"
    },
    {
      icon: "interest-football.png",
      title: "Soccer",
      description: "I played soccer until I was 18, and I still love playing with my friends on weekends."
    },
    {
      icon: "interest-swimming.png",
      title: "Swimming & Fitness",
      description: "I love going swimming and hitting the gym. It's my go-to way to stay active, clear my mind, and maintain a healthy balance in life."
    },
    {
      icon: "🏓",
      title: "Table Tennis",
      description: "Table tennis is one of my favorite sports to play. The quick reflexes and fast-paced rallies make it incredibly engaging and fun."
    }
  ];

  return (
    <div className="other-page">
      <div className="page-header">
        <h1 className="page-title">What I Do for Fun</h1>
      </div>
      
      <div className="other-container">
        <section className="interests-section">
          <h2 className="section-title">My Interests</h2>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card">
                <div className="interest-icon">
                  {typeof interest.icon === 'string' && interest.icon.endsWith('.png') ? (
                    <img src={`/images/3d-icons/${interest.icon}`} alt={interest.title} />
                  ) : (
                    interest.icon
                  )}
                </div>
                <div className="interest-content">
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Other;