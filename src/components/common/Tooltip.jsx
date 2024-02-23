import React from 'react';
import '../../assets/css/scss/components/_tooltip.scss';

function Tooltip({ text, children }) {


  return (
    <div className="tooltip-container">
    <div className="tooltip-content">
      {children}
      <div className="tooltip">
        {text}
        <div className="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  );
}

export default Tooltip;
