import { useState } from "react";

import "./App.css";

function App() {
  const [theme, setTheTheme] = useState("light");

  const buttonLabel = `Set the theme to ${
    theme === "light" ? "dark" : "light"
  }`;

  function themeToggleHandler() {
    setTheTheme((state) => (state === "dark" ? "light" : "dark"));
  }

  const htmlElement = document.documentElement;

  htmlElement.className = theme === "dark" ? "dark-mode" : "";

  return (
    <div className="app">
      <div className="theme-togller-container">
        <button className="them-togller-button" onClick={themeToggleHandler}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default App;
