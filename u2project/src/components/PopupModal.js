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
      <div className={`${styles.board} ${styles.modal}`}>
        <div onClick={props.unclick}>
          <header className={styles.header}>
            <h2>{props.name}</h2>
          </header>
          <img src={props.image} className={styles.image} />
          <div className={styles.content}>{indivRender}</div>
        </div>
        <form>
          <button
            onClick={addToFavorites}
            type="submit"
            className="btn"
            disabled={checkRepeat()}
          >
            Favorite
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
