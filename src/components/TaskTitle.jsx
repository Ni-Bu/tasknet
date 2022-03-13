import { React, useContext } from "react";
import styles from "../css/openedTask.module.css";
import ThemeContext from "../context/themeContext";
function TaskTitle(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const getIndex = (id) => {
    return props.taskList.findIndex((ID) => ID.id === id);
  };
  const handleChange = () => {
    console.log(props.bool);
    const tempTaskList = [...props.taskList];
    props.taskList.map((task) => {
      if (task.isChecked === props.bool) {
        tempTaskList[getIndex(task.id)].isChecked = !task.isChecked;
      }
    });
    console.log("temp", tempTaskList);
    props.setTaskList(tempTaskList);
    console.log(props.taskList);
  };
  return (
    <div
      className={`${styles.title} ${
        theme === "dark" ? styles.titleDark : styles.titleLight
      }`}
    >
      {props.title}
      <div>
        <input
          className={styles.selectAllCheckBox}
          type="checkbox"
          onChange={handleChange}
        />
        <span className={styles.selectAllCheckBoxTitle}>Select All</span>
      </div>
    </div>
  );
}

export default TaskTitle;
