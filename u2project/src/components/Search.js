import React, { useState, useEffect } from "react";
import data from "./../data";

// console.log(x.replace(/ /g, "_")) / /g instead of "__" because "__" will only replace the first instance of "__"

function Search(props) {
  const [search, setSearch] = useState("");
  const [displaySearch, setDisplaySearch] = useState("");
  // const [data, setData] = useState("");
  // const [error, setError] = useState(null);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "a9667111f2msh545702bad6cda6dp1b4b30jsn5a2f952e5907",
  //     "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  //   },
  // };

  //  const fetchPost = async (url) => {
  //   try {
  //     const res = await fetch(url, options);

  //     if (res.status !== 200) {
  //       throw new Error("Something went wrong.");
  //     }

  //     const data = await res.json();
  //     setData(data);
  
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // useEffect(() => {
  //   const url =
  //     "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
  //   fetchPost(url);
  // }, [search]);

  const handleSearchChange = (event) => {
    const rawSearch = event.target.value;
    const filterSearch = rawSearch.replace(/ /g, "_");
    setSearch(filterSearch);
    // searchPool(search);
  };

  const searchPool = (search) => {
    let searchPool = [];
    for (let i = 0; i < data.results.length; i++) {
      for (let k = 0; k < data.results[i].tags.length; k++) {
        if (data.results[i].tags[k].name === search) {
          searchPool.push(data.results[i]);
        } else if (search !== data.results[i].tags[k].name) {
          console.log("Sorry! Try a different search term")
        }
      }
    }
    // console.log(searchResults);
    return searchPool;
  };

  const handleOutputSubmit = (event) => {
    event.preventDefault();
    const searchResults = searchPool(search);
    props.setSearchResult(searchResults); // this LIFTS searchResults back up to Parent via setSearchResult
    setDisplaySearch(search)
    setSearch("");
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
      <h3 className="centered">{displaySearch}</h3>
    </div>
  );
}

export default Search;
