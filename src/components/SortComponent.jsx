

import React, { useState } from 'react';

const SortComponent = ({ products, onSort }) => {
  const [selectedOption, setSelectedOption] = useState('relevance');

  const handleSortChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    onSort(option);
  };

  return (
    <div className='sort-wrapper'>
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" value={selectedOption} onChange={handleSortChange}>
        <option value="relevance">Relevance</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortComponent;
