import React from "react";
const AuthContext = React.createContext({
  isUserLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export default AuthContext;
