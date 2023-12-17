import Header from "./context/components/Header";
import AuthContext from "./context/auth-context";
import { useContext } from "react";
import "./App.css";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <div className="app">
      <Header />
      <button onClick={ctx.loginHandler}>Login</button>
      <button onClick={ctx.logoutHandler}>LogOut</button>
    </div>
  );
}

export default App;
