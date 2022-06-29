import React, { useState, useEffect, useContext } from "react";
import PopupModal from "./PopupModal";
import ReactContext from "../context/react-context";

function Results(props) {
  const [click, setClick] = useState(false);
  const [result, setResult] = useState({}); // this allows us to call one modal popup, instead of previously rendering the modal under the render = displayArr.map

  let resultsArr = props.results;

  // console.table(resultsArr);

  // const reactCtx = useContext(ReactContext);

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

  // reactCtx.setAllResults((prevState) => {
  //   return([
  //   ...prevState, displayArr])
  // })



  let render = displayArr.map((item) => {   // MAGIC
    return (
      <div>
        <img
          src={item.image}
          className="image"
          storeName={item.name}
          storeInstructions={JSON.stringify(item.instructions)} // u can store attributes in any HTML element, and here we have to JSON.stringify instructions because it comes initially as an array with other information
          storeDescription={item.description}
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
      name: event.target.getAttribute("storeName"), // this gets the attribute out from the event.target element we're clicking on
      image: event.target.src,
      instructions: event.target.getAttribute("storeInstructions"),
      description: event.target.getAttribute("storeDescription")
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
          description={result.description}
          unclick={unclick}
        ></PopupModal>
      )}
    </div>
  );
}

export default Results;
