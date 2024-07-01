import React, { useState } from "react";
import { autocompleteData } from "../Utilities/AutoSearchData";
import '../CSS/search.css'

const Search = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
  };

  const filterData = search ? 
    autocompleteData.filter((result) => result.toLowerCase().includes(search.toLowerCase())) : [];

  return (
    <div className="container">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Search Here"
        onChange={handleInputChange}
      />
      {
        search.length === 0 ? 
        (
            <p>Search Something...</p>
        )
        :
        (
            <ul>
            {filterData.length > 0 ?
                    filterData.map((item, index) => <li key={index} onClick={() => handleSuggestionClick(item)}>{item}</li>)  : 
                    <p>No results found</p>
            }
            </ul>
        )

      }
    </div>
  );
};

export default Search;
