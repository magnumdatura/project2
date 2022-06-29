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
  // console.log(obj);
  const indivRender = obj.map((item) => {
    return (
      <div>
        <p>{item.display_text}</p>
      </div>
    );
  });

  const reactCtx = useContext(ReactContext);

  function addToFavorites() {
    // reactCtx.setIsFavorite(!reactCtx.isFavorite); // this creates a TOGGLE function of the checkbox, by setting it to be the opposite of whats already set state
    reactCtx.setAllResults((prevState) => {
      return [...prevState, props.name];
    });
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
        {/* <form>
          <button onClick={addToFavorites} type="submit" className="btn">
            Favorite
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default PopupModal;
