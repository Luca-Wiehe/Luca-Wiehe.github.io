import React from 'react';
import './KpiGrid.css';
import Kpi from '../../UiComponents/Kpi';
import ProgressBar from '../../UiComponents/ProgressBar';
import languages from '../../Constants/languages.json';
import accounts from '../../Constants/accounts.json';
import CircularImage from '../../UiComponents/CircularImage';

const KpiGrid = () => {
  return (
    <div className="kpi-grid">
      <div className="kpi-header">Background</div>
      <div className="kpi-cell accent1">
        <Kpi kpi1={["of Programming", "> 1000h"]} />
      </div>
      <div className="kpi-cell accent2">
        <Kpi kpi1={["Projects", 5]} />
      </div>
      <div className="kpi-cell accent3">
        <Kpi kpi1={["Programming Languages", 5]} />
      </div>
      <div className="kpi-cell accent4">
        <Kpi kpi1={["Internships", 4]} />
      </div>
      <div className="kpi-header">Programming Languages</div>
      <div className="programming-languages-list">
        {Object.entries(languages).map(([language, {percentage, description}], index) => (
            <ProgressBar key={index} percentage={percentage} label={language} description={description} />
          )
        )}
      </div>
      <div className="kpi-header">Featured Accounts</div>
      <div className="accounts-list">
        {Object.entries(accounts).map(([platform, {src, href, username}], index) => (
            <div key={index} className="account">
              <a href={href} target="_blank" rel="noreferrer" className="image-wrapper">
                <CircularImage src={`${process.env.PUBLIC_URL}/images/${src}`} alt={platform} />
              </a>
              <span className="platform">{platform}</span>
            </div>
          )
        )}
      </div>
    </div>
  ); 
};

export default KpiGrid;