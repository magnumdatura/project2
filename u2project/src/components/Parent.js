import React, { useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import data from "./../data";
import Results from "./Results";
import Search from "./Search";

const Parent = () => {
  // const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  // const [prepTime, setPrepTime] = useState("");
  // const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <div className="app">
      {/* <form onSubmit={handleOutputSubmit}> */}
        <Search setSearchResult={setSearchResult}/>
        {/* <input
          id="search"
          onChange={handleSearchChange}
          className="col-md-12"
          value={search}
        /> */}
        {/* <button type="submit" className="btn">
          Submit
        </button>
      </form> */}
      <Results results={searchResult}/>
      {/* {JSON.stringify(searchResult)} */}
      <br />
    </div>
  );
};

export default Parent;
