import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import "./style.scss";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Name..." />
      <Icon name="search" />
    </div>
  );
};

export default SearchBar;
