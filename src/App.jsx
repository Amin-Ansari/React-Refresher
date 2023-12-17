import { useReducer } from "react";
import "./App.css";

const reducerFunction = (state, action) => {
  const newValue = { ...state };
  if (action.type === "NORMAL-INCREASE" && newValue.num < 99) {
    newValue.num = ++newValue.num;
  } else if (action.type === "NORMAL-DECREASE" && newValue.num >= 1) {
    newValue.num = --newValue.num;
  } else if (action.type === "DYNAMIC-INCREASE" && newValue.num < 99) {
    newValue.num = newValue.num + action.dynamicNumber;
  } else if (action.type === "DYNAMIC-DECREASE" && newValue.num >= 1) {
    newValue.num = newValue.num - action.dynamicNumber;
  }
  return newValue;
};

function App() {
  const [counterReducer, dispatchReducer] = useReducer(reducerFunction, {
    num: 0,
  });

  const normalIncrement = () => {
    dispatchReducer({ type: "NORMAL-INCREASE" });
  };
  const normalDecrement = () => {
    dispatchReducer({ type: "NORMAL-DECREASE" });
  };
  const dynamicIncrement = () => {
    dispatchReducer({ type: "DYNAMIC-INCREASE", dynamicNumber: 4 });
  };
  const dynamicDecrement = () => {
    dispatchReducer({ type: "DYNAMIC-DECREASE", dynamicNumber: 3 });
  };

  return (
    <div className="app">
      <p>{counterReducer.num}</p>
      <div>
        <button onClick={normalIncrement}>Increase by 1</button>
        <button onClick={normalDecrement}>Decrease by 1</button>
        <button onClick={dynamicIncrement}>Increase by dynamicNumber</button>
        <button onClick={dynamicDecrement}>Decrease by dynamicNumber</button>
      </div>
    </div>
  );
}

export default App;
