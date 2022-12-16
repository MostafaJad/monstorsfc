import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder, onSearchChange, className }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
      className={className}
    />
  );
};
export default SearchBox;
