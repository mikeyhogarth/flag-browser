import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  nextFlag,
  previousFlag,
  selectCountryCode,
  selectCountryName,
  goToLetter,
} from "./reducers/flags.reducer";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWYZ".split("");

function App() {
  const countryCode = useSelector(selectCountryCode);
  const countryName = useSelector(selectCountryName);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>UN Member Flags</h1>
      <div className="flagDisplay">
        <img
          width="200"
          alt="flag"
          className="flag"
          src={`/svg/${countryCode}.svg`}
        ></img>
        <h1>{countryName}</h1>
      </div>

      <div className="navDisplay">
        <nav>
          <button
            onClick={() => dispatch(previousFlag())}
            className="previousButton"
          >
            Previous
          </button>

          <button onClick={() => dispatch(nextFlag())} className="nextButton">
            Next
          </button>

          <h2>Go to letter...</h2>

          {alphabet.map((letter) => {
            return (
              <button key={letter} onClick={() => dispatch(goToLetter(letter))}>
                {letter}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default App;
