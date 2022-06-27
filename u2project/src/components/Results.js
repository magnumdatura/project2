import React, { useState, useEffect } from "react";
import PopupModal from "./PopupModal";

function Results(props) {
//   const [click, setClick] = useState(false);

  let resultsArr = props.results;
  console.table(resultsArr);

  let displayArr = [];
  for (let j = 0; j < resultsArr.length; j++) {
    const obj = {
      name: resultsArr[j].name,
      description: resultsArr[j].description,
      instructions: resultsArr[j].instructions,
      image: resultsArr[j].thumbnail_url,
    };
    displayArr.push(obj);
  }
  console.table(displayArr);

  let render = displayArr.map((item) => {
    return (
      <div>
        <img src={item.image} className="image" />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        {/* <PopupModal
          image={item.image}
          name={item.name}
          instructions={item.instructions}
        ></PopupModal> */}
      </div>
    );
  });

  return <div>{render}</div>;
}

export default Results;
