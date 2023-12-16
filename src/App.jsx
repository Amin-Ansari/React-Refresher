import { useState } from "react";

import Form from "./Components/Form";
import "./App.css";

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
    </div>
  );
}

export default App;
