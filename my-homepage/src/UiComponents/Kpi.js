import React from 'react';
import './Kpi.css';

const Kpi = ({ kpi1 }) => (
  <div className="container">
      <div className="kpi">{kpi1[1]}</div>
      <div className="kpi-name">{kpi1[0]}</div>
  </div>
);

export default Kpi;