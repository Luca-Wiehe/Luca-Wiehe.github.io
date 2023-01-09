import React from 'react';
import './KpiGrid.css';
import ThreeKpi from '../../UiComponents/ThreeKpi';
import ProgressBar from '../../UiComponents/ProgressBar';
import languages from '../../Constants/languages.json';
import accounts from '../../Constants/accounts.json';
import CircularImage from '../../UiComponents/CircularImage';

const KpiGrid = () => {
  return (
    <div className="kpi-grid">
      <div className="kpi-header">Programming Experience</div>
      <div className="kpi-cell accent1">
        <ThreeKpi kpi1={["Lines of Code", 300]} kpi2={["Average", 50]} kpi3={["Max", 10000]}/>
      </div>
      <div className="kpi-cell accent2">
        <ThreeKpi kpi1={["Projects", 5]} kpi2={["Team", 3]} kpi3={["Individual", 2]} />
      </div>
      <div className="kpi-cell accent3">
        <ThreeKpi kpi1={["Programming Languages", 5]} kpi2={["Self-taught", 2]} kpi3={["Academic", 3]} />
      </div>
      <div className="kpi-cell accent4">
        <ThreeKpi kpi1={["Internships", 4]} kpi2={["Industrial", 2]} kpi3={["Academic", 2]} />
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