import React from "react";
import "./SearchPanel.css";

const SearchPanel = () => {
  const searchText = "Type here to search";
  return (
    <input
      type="text"
      className="search-input form-control"
      placeholder={searchText}
    ></input>
  );
};

export default SearchPanel;
