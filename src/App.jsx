import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { counterActions } from "./store/counter-slice";
import { themeActions } from "./store/slices";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.counterSlice.num);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.className = theme.theme;
  }, [theme.theme]);

  const themeDispatch = useDispatch();

  return (
    <div className="app">
      <p>{counter}</p>
      <div>
        <button onClick={() => themeDispatch(counterActions.increment())}>
          increase
        </button>
        <button onClick={() => themeDispatch(counterActions.decrement())}>
          decrease
        </button>
      </div>

      <button onClick={() => themeDispatch(themeActions.setToDark())}>
        Dark
      </button>
      <button onClick={() => themeDispatch(themeActions.setToLight())}>
        Light
      </button>
    </div>
  );
}

export default App;
