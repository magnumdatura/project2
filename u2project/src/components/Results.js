import React, { useState, useEffect } from "react";
import PopupModal from "./PopupModal";

function Results(props) {
  const [click, setClick] = useState(false);
  const [result, setResult] = useState({});

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
        <img
          src={item.image}
          className="image"
          storeName={item.name}
          storeInstructions={JSON.stringify(item.instructions)}
          onClick={clickState}
        />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <br />
      </div>
    );
  });

  function clickState(event) {
    setResult({
      name: event.target.getAttribute("storeName"),
      image: event.target.src,
      instructions: event.target.getAttribute("storeInstructions"),
    });
    setClick(true);
  }

  function unclick(event) {
    setClick(false);
  }

  return (
    <div>
      {render}
      {click && (
        <PopupModal
          name={result.name}
          image={result.image}
          instructions={result.instructions}
          unclick={unclick}
        ></PopupModal>
      )}
    </div>
  );
}

export default Results;
