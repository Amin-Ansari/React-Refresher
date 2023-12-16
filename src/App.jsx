
import Users from "./Components/Users";
import { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Users />
function App() {
  const [userName, setTheUserName] = useState("");
  const [password, setThePassword] = useState("");

  const userInfo = {};

  function resetThepassAndUserName() {
    setTheUserName("");
    setThePassword("");
  }

  const passwordValueHandler = (value) => {
    setThePassword(value);
  };
  const userNameValueHandler = (value) => {
    setTheUserName(value);
  };

  const onFormSubmission = (e) => {
    e.preventDefault();
    userInfo["userNameValue"] = userName;
    userInfo.passwordValue = password;

    resetThepassAndUserName();
    console.log(userInfo);
  };

  return (
    <div className="app">
      <Form
        userNameValue={userName}
        passwordValue={password}
        userNameFunction={userNameValueHandler}
        passwordFunction={passwordValueHandler}
        formSubmitHandler={onFormSubmission}
      />
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
