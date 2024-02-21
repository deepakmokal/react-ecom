import React from "react";
import { useSearch } from "../context/SearchContext";
import '../assets/css/scss/components/_search.scss';
import searchIcon from '../assets/images/search.svg' 

const SearchInput = () => {
  const { searchTerm, handleSearchTermChange } = useSearch();
  const handleChange = (e) => {
    handleSearchTermChange(e.target.value);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="What Are You Looking For"
      />
      <img src={searchIcon} alt="search" />
    </div>
  );
};

export default SearchInput;
