import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { themeActions } from "./store/slices";

import "./App.css";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.className = theme.theme;
  }, [theme.theme]);

  const themeDispatch = useDispatch();

  return (
    <div className="app">
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
