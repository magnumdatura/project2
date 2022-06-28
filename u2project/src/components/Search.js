import React, { useState } from "react";
import data from "./../data";

// console.log(x.replace(/ /g, "_"))

function Search(props) {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    const rawSearch = event.target.value;
    const filterSearch = rawSearch.replace(/ /g, "_");
    setSearch(filterSearch);
    searchPool(search);
  };

  const searchPool = (search) => {
    let searchPool = [];
    for (let i = 0; i < data.results.length; i++) {
      for (let k = 0; k < data.results[i].tags.length; k++) {
        if (data.results[i].tags[k].name === search) {
          searchPool.push(data.results[i]);
        }
      }
    }
    // console.log(searchResults);
    return searchPool;
  };

  const handleOutputSubmit = (event) => {
    event.preventDefault();
    const searchResults = searchPool(search);
    props.setSearchResult(searchResults);
  };
  return (
    <div>
      <form onSubmit={handleOutputSubmit}>
        <input
          id="search"
          onChange={handleSearchChange}
          className="col-md-12"
          value={search}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Search;
