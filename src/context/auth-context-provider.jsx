import { useReducer } from "react";
import AuthContext from "./auth-context";

const reducerFunction = (state, action) => {
  const userAuth = { ...state };

  if (action.type === "LOGIN") {
    userAuth.isUserLoggedIn = true;
  } else if (action.type === "LOGOUT") {
    userAuth.isUserLoggedIn = false;
  }
  return userAuth;
};

const AuthContextProvider = ({ children }) => {
  function loginDispathcer() {
    authDispatch({ type: "LOGIN" });
  }

  function logoutDispatcher() {
    authDispatch({ type: "LOGOUT" });
  }

  const [userAuth, authDispatch] = useReducer(reducerFunction, {
    isUserLoggedIn: false,
    loginHandler: loginDispathcer,
    logoutHandler: logoutDispatcher,
  });

  return (
    <AuthContext.Provider value={userAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
