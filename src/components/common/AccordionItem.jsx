import React, { useState } from 'react';
import '../../assets/css/scss/components/_accordion.scss';
import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';
const AccordionItem = ({ title, children }) => {
    
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${title.toLowerCase()} ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header"  onClick={toggleAccordion}>
        <h3>{title.split('_').join(' ')}</h3>
        <span className="accordion-icon">{isOpen ?
        (
            <img className='minusIcon' src={minus} alt="minus" />
        ):
        (
            <img className='plusIcon' src={plus} alt="plus" />
        )  }</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
