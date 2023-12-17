import { useReducer } from "react";
import AuthContext from "./auth-context";

const reducerFunction = (state, action) => {
  const userAuth = { ...state };

  if (action.type === "LOGIN") {
    userAuth.isLoggedIn = true;
  } else if (action.type === "LOGOUT") {
    userAuth.isLoggedIn = false;
  }
  return userAuth;
};

const AuthContextProvider = ({ children }) => {
  const [userAuth, authDispatch] = useReducer(reducerFunction, {
    isLoggedIn: false,
    logingHander: loginDispathcer,
    logoutHandler: logoutDispatcher,
  });

  const loginDispathcer = () => {
    authDispatch({ type: "LOGIN" });
  };
  const logoutDispatcher = () => {
    authDispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={userAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
