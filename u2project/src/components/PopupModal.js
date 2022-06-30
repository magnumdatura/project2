import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./PopupModal.module.css";
import ReactContext from "../context/react-context";

const PopupModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <OverLay
          image={props.image}
          name={props.name}
          instructions={props.instructions}
          description={props.description}
          unclick={props.unclick}
        />,
        document.querySelector("#modal-root")
      )}
    </React.Fragment>
  );
};

const OverLay = (props) => {
  // console.log(props.instructions);
  const obj = JSON.parse(props.instructions); // got to JSON.parse to turn the props.instructions, which is currently a JSON.string, back into an array of objects
  // console.log(typeof obj);
  const indivRender = obj.map((item) => {
    return (
      <div>
        <p>{item.display_text}</p>
      </div>
    );
  });

  const reactCtx = useContext(ReactContext);

  const favObj = {
    image: props.image,
    name: props.name,
    description: props.description,
    instructions: props.instructions,
  };

  function addToFavorites(event) {
    event.preventDefault();

    // reactCtx.setIsFavorite(!reactCtx.isFavorite); // this creates a TOGGLE function of the checkbox, by setting it to be the opposite of whats already set state
    reactCtx.setAllResults((prevState) => {
      return [...prevState, favObj];
    });
  }
  // this button function checks for repeated items that are going from PopUpModal to Favorites List (so that there are no repeats in Favlist)
  function checkRepeat() {
    // .find is a method that runs through an array and finds the first item that passes the condition (here: item.name which lies in the Favorite list vs. props.name which lives in the popupmodal (which originally derives from Results))
    const noFavorites = reactCtx.allResults.find(
      // we could also use .includes method here, which returns a true/false || item.name.includes(props.name); (okay wait doesnt work peep line 66)
      (item) => item.name === props.name
    );

    // noFavorites === defined --> checks if that first returned element does exist, and so there is a repeat, and so therefore disabled={true}, and the button will be greyed out
    if (noFavorites === undefined) {
      return false;
    } else {
      return true;
    }
    // for (let i =0; i < reactCtx.allResults.length; i++) {
    // const noFavorites = reactCtx.allResults[i].name.includes(props.name);   // cant really use .includes because need an array of the names in the array allResults
    // }
    // console.log(reactCtx.allResults);
    // console.log(props.name);
    // console.log(noFavorites);
  }

  return (
    <div className={styles.backdrop}>
      <div className={`${styles.board} ${styles.modal} `}>
        <div onClick={props.unclick}>
          <header className={styles.header}>
            <h2>{props.name}</h2>
          </header>
          <img src={props.image} className={styles.image} />
          <div className={styles.content}>{indivRender}</div>
        </div>

        <button
          onClick={addToFavorites}
          type="submit"
          className="mx-4 mb-4 relative bottom-0 right-0 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-800 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          disabled={checkRepeat()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
