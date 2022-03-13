import React from "react";

import { ReactComponent as Delete } from "../img/delete.svg";
import { ReactComponent as UnChecked } from "../img/unchecked.svg";
import addSign from "../img/plus.svg";
import { ReactComponent as Checked } from "../img/checkbox.svg";
import styles from "../css/openedTask.module.css";

function MainTodo({ task, taskList, setTaskList, checked }) {
  const handleChange = (task) => {
    const newList = taskList.map((item) => {
      if (task.id === item.id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setTaskList(newList);
  };

  const RemoveTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleAdd = (task) => {
    const tempMini = [...task.miniTodo];
    tempMini.push({
      id: task.id + "" + task.miniTodo.length,
      data: "Sample Text",
      isChecked: false,
    });
    const newList = taskList.map((item) => {
      if (task.id === item.id) {
        item.miniTodo = tempMini;
      }
      return item;
    });
    setTaskList(newList);
    console.log(taskList);
  };

  const sinceCreated = (todo) => {
    if (Date.now() - todo.created < 300000) {
      return styles.lessThan5;
    } else if (Date.now() - todo.created < 3600000) {
      return styles.lessThanHour;
    } else {
      return styles.moreThanHour;
    }
  };

  return (
    <div className={`${styles.mainTodo} ${sinceCreated(task)}`}>
      <label className={styles.label}>
        {checked ? <Checked /> : <UnChecked />}
        <input type="checkbox" onChange={() => handleChange(task)} />
        <span className={styles.taskItemContent}>{task.data}</span>
      </label>
      <button
        className={`${styles.addBtn} ${checked ? styles.hideBtn : ""}`}
        onClick={() => handleAdd(task)}
      >
        <img src={addSign} className="addSign" alt="add Mini todo" />
      </button>
      <button className={styles.deleteBtn} onClick={() => RemoveTask(task.id)}>
        <Delete />
      </button>
    </div>
  );
}

export default MainTodo;
