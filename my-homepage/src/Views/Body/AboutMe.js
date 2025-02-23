import React from 'react';
import aboutData from '../../Constants/about.json';
import languagesData from '../../Constants/languages.json';
import './AboutMe.css';

const AboutMe = () => {
    // Sort languages by percentage in descending order
    const sortedLanguages = Object.entries(languagesData)
        .sort((a, b) => b[1].percentage - a[1].percentage)
        .map(([name, data]) => ({
            name,
            percentage: data.percentage,
            description: data.description
        }));

    return (
        <div className="about-container">
            <div className="header-wrapper">
                <h1>{aboutData.title}</h1>
            </div>

            <div className="bio-section">
                <p>{aboutData.bio}</p>
            </div>

            <div className="languages-section">
                <h2>{aboutData.intro}</h2>
                <div className="languages-grid">
                    {sortedLanguages.map((language, index) => (
                        <div className="language-card" key={index}>
                            <div className="language-header">
                                <h3>{language.name}</h3>
                                <span className="proficiency-rating">{Math.round(language.percentage * 10)}/10</span>
                            </div>
                            <div className="progress-container">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${language.percentage * 100}%` }}
                                />
                            </div>
                            <p className="language-description">{language.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMe; 