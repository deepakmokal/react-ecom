import React, { useState } from 'react';
//import './Tooltip.css'; // Import your CSS file for styling
import '../../assets/css/scss/components/_tooltip.scss';

function Tooltip({ text, children }) {
//   const [showTooltip, setShowTooltip] = useState(false);

//   const handleMouseEnter = () => {
//     setShowTooltip(true);
//   };

//   const handleMouseLeave = () => {
//     setShowTooltip(false);
//   };

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
