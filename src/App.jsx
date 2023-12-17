import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [windowDemintions, updateWindowDemintions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function resizeHandler() {
      updateWindowDemintions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="app">
      <p className="window-width">{windowDemintions.width}px</p>
      <p className="window-height">{windowDemintions.height}px</p>
    </div>
  );
}

export default App;
