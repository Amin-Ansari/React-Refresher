import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setTheCounter] = useState(0);

  const incrementHandler = () => {
    if (counter < 99) setTheCounter((state) => state + 1);
  };
  const decrementHandler = () => {
    if (counter >= 1) setTheCounter((state) => state - 1);
  };
  const resetHandler = () => {
    setTheCounter(0);
  };

  return (
    <div className="app">
      <h1 className="the-counter-indicator">{counter}</h1>
      <div className="buttons-container">
        <button type="button" onClick={incrementHandler}>
          Increment
        </button>
        <button type="button" onClick={decrementHandler}>
          Decrement
        </button>
        <button type="button" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
