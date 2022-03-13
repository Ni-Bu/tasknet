import { useState, useEffect, useContext } from "react";
import FinsihedTask from "./finishedTask";
import OpenTask from "./openedTask";
import InputTask from "./inputTask.jsx";
import Greeting from "./Greeting";
import NavBar from "./NavBar";
import ThemeContext from "../context/themeContext";
function Todo(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setTaskList(currentUser.taskList);
  }, []);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    localStorage.setItem(
      currentUser.email,
      JSON.stringify({ ...currentUser, taskList })
    );
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ ...currentUser, taskList })
    );
  }, [taskList]);

  return (
    <div className={`todo-container${theme === "dark" ? "--dark" : "--light"}`}>
      <NavBar />
      <div className="todo-container">
        <Greeting />
        <InputTask taskList={taskList} setTaskList={setTaskList} />

        <OpenTask taskList={taskList} setTaskList={setTaskList} />
        <FinsihedTask taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}

export default Todo;
