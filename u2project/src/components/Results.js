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
  // console.table(displayArr);

  // reactCtx.setAllResults((prevState) => {
  //   return([
  //   ...prevState, displayArr])
  // })

  let render = displayArr.map((item, i) => {
    // MAGIC
    return (
      <div key={i}>
        <div className="m-5 p-6 w-122 bg-white rounded-xl shadow-lg flex-wrap items-center ">
        <img
          src={item.image}
          className="image"
          storename={item.name}
          storeinstructions={JSON.stringify(item.instructions)} // u can store attributes in any HTML element, and here we have to JSON.stringify instructions because it comes initially as an array with other information
          storedescription={item.description}
          onClick={clickState}
        />
        <h2 className="text-2xl font-serif my-5">{item.name}</h2>
        <p>{item.description}</p>
        <br />
        </div>
      </div>
    );
  });

  function clickState(event) {
    setResult({
      name: event.target.getAttribute("storename"), // this gets the attribute out from the event.target element we're clicking on
      image: event.target.src,
      instructions: event.target.getAttribute("storeinstructions"),
      description: event.target.getAttribute("storeDescription"),
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
