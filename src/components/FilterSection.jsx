import React, { useState } from "react";
import { filterOptions } from "../filterOptions";
import AccordionItem from "./common/AccordionItem";
import Accordion from "./common/Accordion";

const FilterSection = ({ onFilterChange }) => {
    
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (category, value) => {
    const updatedFilters = { ...selectedFilters };
    if (updatedFilters[category]) {
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[category] = [...updatedFilters[category], value];
      }
    } else {
      updatedFilters[category] = [value];
    }
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div>
      <h3>Filter by:</h3>

      <Accordion>
        {filterOptions.map((option) => (
          <AccordionItem key={option.category} title={option.category}>
            <div>
              {option.options.map((opt) => (
                
                  <label key={opt}>
                    <input
                      type="checkbox"
                      checked={(
                        selectedFilters[option.category] || []
                      ).includes(opt)}
                      onChange={() => handleFilterChange(option.category, opt)}
                    />
                    {opt}
                  </label>
                
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterSection;
