import AuthContext from "../auth-context";
import { useContext } from "react";
import "./Header.css";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <header className="header">
      {ctx.isUserLoggedIn ? "The User is Logged in" : "The User is Logged out"}
    </header>
  );
};

export default Header;
