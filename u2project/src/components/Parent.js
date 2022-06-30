import React, { useState, useEffect } from "react";
import ReactContext from "../context/react-context";
import Favorites from "./Favorites";
import Navbar from "./Navbar";
// import { isCompositeComponent } from "react-dom/test-utils";
// import data from "./../data";
import Results from "./Results";
import Search from "./Search";

const Parent = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [isFavorite, setIsFavorite] = useState(false);
  const [allResults, setAllResults] = useState([]);
  const [openFavorite, setOpenFavorite] = useState(false);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "a9667111f2msh545702bad6cda6dp1b4b30jsn5a2f952e5907",
  //     "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  //   },
  // };

  // fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
  //   .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));
  // const fetchPost = async (url) => {
  //   try {
  //     const res = await fetch(url, options);

  //     if (res.status !== 200) {
  //       throw new Error("Something went wrong.");
  //     }

  //     const data = await res.json();
  //     setData(data);

  //     setName(data.results[0].name);
  //     setDescription(data.results[0].description);

  //     for (let i = 0; i < data.results[0].instructions.length; i++) {
  //       // setInstructions(...instructions, data.results[0].instructions[i].display_text)
  //       // }
  //       setInstructions((prevState) => {
  //         return [...prevState, data.results[0].instructions[i].display_text];
  //       });
  //     }

  //     setPrepTime(data.results[0].prep_time_minutes);
  //     setImage(data.results[0].thumbnail_url);

  //   } catch (err) {
  //     setError(err.message);
  //   }

  //   //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   const url =
  //     "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
  //   fetchPost(url);
  // }, [setSearch, search]);

  // setName();
  // setDescription();

  // for (let i = 0; i < data.results[0].instructions.length; i++) {
  //   // setInstructions(...instructions, data.results[0].instructions[i].display_text)
  //   // }
  //   setInstructions((prevState) => {
  //     return [...prevState, ];
  //   });
  // }

  // setPrepTime();
  // setImage();

  // const searchTags1 = data.results;
  // console.log(searchTags1);

  // const handleSearchChange = (event) => {
  //   setSearch(event.target.value);
  // };

  // const searchPool = (Search) => {
  //   let searchPool = [];
  //   for (let i = 0; i < data.results.length; i++) {
  //     for (let k = 0; k < data.results[i].tags.length; k++) {
  //       if (data.results[i].tags[k].name === Search) {
  //         searchPool.push(data.results[i]);
  //       }
  //     }
  //   }
  //   // console.log(searchResults);
  //   return searchPool;
  // };

  // const handleOutputSubmit = (event) => {
  //   event.preventDefault();
  //   const searchResults = searchPool(Search);
  //   // console.log(searchResults);
  //   const itemArr = [];
  //   for (let j = 0; j < searchResults.length; j++) {
  //     const obj = {
  //       name: searchResults[j].name,
  //       description: searchResults[j].description,
  //       instructions: searchResults[j].instructions,
  //       image: searchResults[j].thumbnail_url,
  //     };
  //     itemArr.push(obj);
  //   }

  //   console.table(itemArr);
  //   setOutput(itemArr);
  // };

  function openFavorites(event) {
    event.preventDefault();
    setOpenFavorite(true);
  }

  return (
    <ReactContext.Provider
      value={{
        allResults,
        setAllResults,
        openFavorite,
        setOpenFavorite,
        openFavorites,
      }}
    >
      <div className="app container">
        {/* <Navbar /> */}
        <h1 className="text-5xl m-6 object-center font-sans">
          Flavor fidget spinner
        </h1>
        <Search setSearchResult={setSearchResult} />
        <button
          onClick={openFavorites}
          className="absolute top-21 right-5 px-4 py-4 text-sm text-red-600 font-semibold rounded-full border border-red-700 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        <Results results={searchResult} />
        <Favorites favorites={allResults} />
        {/* {JSON.stringify(searchResult)} */}

        <br />
      </div>
    </ReactContext.Provider>
  );
};

export default Parent;
