// components/SkillBar.jsx
import React from 'react';

const SkillBar = ({ name, percentage, color = '#18c5a4' }) => {
  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar-track">
        <div 
          className="skill-bar-fill" 
          style={{ width: `${percentage}%`, backgroundColor: color }}
        >
          <div className="skill-bar-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;