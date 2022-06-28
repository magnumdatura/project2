import React from "react";
import ReactDOM from "react-dom";

import styles from "./PopupModal.module.css";

const PopupModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <OverLay
          image={props.image}
          name={props.name}
          instructions={props.instructions}
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

  return (
    <div className={styles.backdrop} onClick={props.unclick}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.name}</h2>
        </header>
        <img src={props.image} className={styles.image} />
        <div className={styles.content}>{indivRender}</div>
      </div>
    </div>
  );
};

export default PopupModal;
