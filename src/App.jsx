import { useState } from "react";

import "./App.css";

function App() {
  const [tasksList, updateTheTasksList] = useState([]);
  const [taskTitle, setTheTaskTitle] = useState("");

  const taskTitleValueHandler = (eventObj) => {
    setTheTaskTitle(eventObj.target.value);
  };

  const taskAddHandler = () => {
    const task = {
      title: taskTitle,
      status: "do",
    };
    updateTheTasksList((state) => [...state, task]);
  };

  return (
    <div className="app">
      <form method="post">
        <label htmlFor="#title">Task title</label>
        <input
          type={"text"}
          onChange={taskTitleValueHandler}
          id="title"
        ></input>
        <button type="button" onClick={taskAddHandler}>
          Add the Task
        </button>
      </form>
      <ul className="todo-list">
        {tasksList.map((item, index) => (
          <li className={item.status} key={index}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
