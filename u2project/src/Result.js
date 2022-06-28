import React, { useState, useEffect } from "react";
import PopupModal from "./components/PopupModal";

function Result(props) {
    console.log(`this be ${props.result}`);
  return (
    <div>
      {/* <img src={item.image} className="image" onClick={clickState} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      {click && (
        <PopupModal
          image={item.image}
          name={item.name}
          instructions={item.instructions}
        ></PopupModal>
      )} */}
    </div>
  );
}

export default Result;
