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
  const obj = JSON.parse(props.instructions);
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
        <img src={props.image} width="500" />
        <div className={styles.content}>{indivRender}</div>
        {/* <footer className={styles.actions}>
          <Button onClick={props.okayClicked}>Okay</Button>
        </footer> */}
      </div>
    </div>
  );
};

export default PopupModal;
