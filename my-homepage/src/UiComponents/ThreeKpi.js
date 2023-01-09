import React from 'react';
import './ThreeKpi.css';

const ThreeKpi = ({ kpi1, kpi2, kpi3 }) => (
  <div className="container">
   <div className="row1">
      <div className="row1 large-header">{kpi1[1]}</div>
      <div>{kpi1[0]}</div>
   </div>
   <div className="row2">
      <div className="kpi">{kpi2[0]}: {kpi2[1]}</div>
      <div className="kpi">{kpi3[0]}: {kpi3[1]}</div>
   </div>
  </div>
);

export default ThreeKpi;