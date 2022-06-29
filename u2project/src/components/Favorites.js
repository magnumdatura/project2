import React, {useContext, useState} from 'react';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ReactContext from "../context/react-context";
import ReactDOM from "react-dom";
import PopupModal from "./PopupModal";

const Favorites = () => {
    const [click, setClick] = useState(false);
    const [result, setResult] = useState({});
    const reactCtx = useContext(ReactContext);

    let render = reactCtx.allResults.map((item) => {   // MAGIC
        return (
          <div>
            <img
              src={item.image}
              className="image"
              storeName={item.name}
              storeInstructions={item.instructions} // u can store attributes in any HTML element, and here we have to JSON.stringify instructions because it comes initially as an array with other information
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
        <SlidingPane className='sliding-pane' isOpen={reactCtx.openFavorite} width={window.innerWidth < 600 ? "100%" : "500px"} onRequestClose={() => {reactCtx.setOpenFavorite(false)}} title="Your Favoritas">
            <div>
                {render}
            </div>
        </SlidingPane>
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
};

export default Favorites;