import React from "react";

import MiniTodo from "./miniTodo";
import styles from "../css/openedTask.module.css";
import MainTodo from "./mainTodo";
import TaskTitle from "./TaskTitle";

function OpenTask(props) {
  return (
    <div className={styles.inputContainer}>
      <TaskTitle
        title="OPEN TASK"
        taskList={props.taskList}
        setTaskList={props.setTaskList}
        bool={false}
      />

      {props.taskList.map((task) => {
        return (
          !task.isChecked && (
            <div className={styles.taskContainer} key={task.id}>
              <MainTodo
                checked={false}
                task={task}
                taskList={props.taskList}
                setTaskList={props.setTaskList}
              />
              <MiniTodo
                checked={false}
                task={task}
                taskList={props.taskList}
                setTaskList={props.setTaskList}
              />
            </div>
          )
        );
      })}
    </div>
  );
}
export default OpenTask;
