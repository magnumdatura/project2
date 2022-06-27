import React, { useState } from "react";
import data from "./../data";

function Search(props) {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
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
    // console.log(searchResults);
    // const itemArr = [];
    // for (let j = 0; j < searchResults.length; j++) {
    //   const obj = {
    //     name: searchResults[j].name,
    //     description: searchResults[j].description,
    //     instructions: searchResults[j].instructions,
    //     image: searchResults[j].thumbnail_url,
    //   };
    //   itemArr.push(obj);
    // }

    // console.table(itemArr);
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
