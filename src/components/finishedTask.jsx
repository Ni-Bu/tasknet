import React from "react";

import MiniTodo from "./miniTodo";
import styles from "../css/openedTask.module.css";
import MainTodo from "./mainTodo";
import TaskTitle from "./TaskTitle";
function FinishedTask(props) {
  return (
    <div className={styles.inputContainer}>
      <TaskTitle
        title="FINISHED TASK"
        taskList={props.taskList}
        setTaskList={props.setTaskList}
        bool={true}
      />

      {props.taskList.map(
        (task) =>
          task.isChecked && (
            <div
              className={`${styles.taskContainer}  ${styles.finished}`}
              key={task.id}
            >
              <MainTodo
                checked
                task={task}
                taskList={props.taskList}
                setTaskList={props.setTaskList}
              />
              <MiniTodo
                checked
                task={task}
                taskList={props.taskList}
                setTaskList={props.setTaskList}
              />
            </div>
          )
      )}
    </div>
  );
}
export default FinishedTask;
