import React from "react";
import ReactDOM from "react-dom";

import styles from "./PopupModal.module.css";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.okayClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <img src={props.image} />
        <header className={styles.header}>
          <h2>{props.name}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.instructions}</p>
        </div>
        {/* <footer className={styles.actions}>
          <Button onClick={props.okayClicked}>Okay</Button>
        </footer> */}
      </div>
    </div>
  );
};

const PopupModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <OverLay
          title={props.title}
          message={props.message}
          okayClicked={props.okayClicked}
        />,
        document.querySelector("#modal-root")
      )}
    </React.Fragment>
  );
};

export default PopupModal;
