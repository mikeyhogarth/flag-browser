import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  nextFlag,
  previousFlag,
  randomFlag,
  revealName,
  hideName,
  selectCountryCode,
  selectCountryName,
  selectNameHidden,
} from "./reducers/flags.reducer";

function App() {
  const countryCode = useSelector(selectCountryCode);
  const countryName = useSelector(selectCountryName);
  const hidden = useSelector(selectNameHidden);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="flagDisplay">
        <img
          width="200"
          alt="flag"
          className="flag"
          src={`/svg/${countryCode}.svg`}
        ></img>
        <h1>{hidden ? "???" : countryName}</h1>
      </div>
      <div className="navDisplay">
        {!hidden && (
          <button onClick={() => dispatch(hideName())} className="revealButton">
            Hide
          </button>
        )}
        {hidden && (
          <button
            onClick={() => dispatch(revealName())}
            className="revealButton"
          >
            Reveal
          </button>
        )}

        <nav>
          <button
            onClick={() => dispatch(previousFlag())}
            className="previousButton"
          >
            Previous
          </button>
          <button
            onClick={() => dispatch(randomFlag())}
            className="randomButton"
          >
            Random
          </button>
          <button onClick={() => dispatch(nextFlag())} className="nextButton">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}

export default App;
