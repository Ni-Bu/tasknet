import { React, useState } from "react";
import styles from "../css/openedTask.module.css";
import { ReactComponent as Delete } from "../img/delete.svg";
import { ReactComponent as UnChecked } from "../img/unchecked.svg";
import { ReactComponent as Checked } from "../img/checkbox.svg";

function MiniTodo(props) {
  const [miniTodoEdit, setMiniTodoEdit] = useState(false);

  const getIndex = (id) => {
    return props.taskList.findIndex((ID) => ID.id === id);
  };
  const RemoveTask = (id) => {
    const newMiniTodo = props.taskList[getIndex(props.task.id)].miniTodo.filter(
      (task) => task.id !== id
    );

    const tempTaskList = [...props.taskList];
    props.taskList.map((task) => {
      if (task.id === props.task.id) {
        tempTaskList[getIndex(task.id)].miniTodo = newMiniTodo;
      }
    });

    props.setTaskList(tempTaskList);
  };

  const handleChange = (id) => {
    if (props.checked === false) {
      const tempTaskList = [...props.taskList];
      props.taskList.map((task) => {
        const miniIndex = tempTaskList[getIndex(task.id)].miniTodo.findIndex(
          (ID) => ID.id === id
        );
        if (task.id === props.task.id) {
          tempTaskList[getIndex(task.id)].miniTodo[miniIndex].isChecked =
            !tempTaskList[getIndex(task.id)].miniTodo[miniIndex].isChecked;
        }
      });

      props.setTaskList(tempTaskList);
    }
  };
  const handleMiniChange = (e, subTask) => {
    if (props.checked === false) {
      const tempTaskList = [...props.taskList];
      props.taskList.map((task) => {
        const miniIndex = tempTaskList[getIndex(task.id)].miniTodo.findIndex(
          (ID) => ID.id === subTask.id
        );
        if (task.id === props.task.id) {
          tempTaskList[getIndex(task.id)].miniTodo[miniIndex].data =
            e.target.value;
        }
      });

      props.setTaskList(tempTaskList);
    }
  };

  return (
    <>
      {props.task.miniTodo.length !== 0 &&
        props.task.miniTodo.map((subTask) => {
          return (
            <div
              className={`${styles.miniTodo} ${
                subTask.isChecked || props.checked ? styles.finished : ""
              }`}
              key={subTask.id + props.task.id}
            >
              <label className={styles.labelMini}>
                {subTask.isChecked || props.checked ? (
                  <Checked />
                ) : (
                  <UnChecked />
                )}
                <input
                  type="checkbox"
                  onChange={() => handleChange(subTask.id)}
                />
              </label>
              {miniTodoEdit && (
                <span
                  className={styles.taskItemContent}
                  onClick={() => {
                    setMiniTodoEdit(false);
                  }}
                >
                  {subTask.data}
                </span>
              )}

              {!miniTodoEdit && (
                <form
                  onSubmit={() => {
                    setMiniTodoEdit(true);
                  }}
                >
                  <input
                    type="text"
                    value={subTask.data}
                    onChange={(e) => handleMiniChange(e, subTask)}
                  ></input>
                </form>
              )}

              <button
                className={styles.deleteBtn}
                onClick={() => RemoveTask(subTask.id)}
              >
                <Delete />
              </button>
            </div>
          );
        })}
    </>
  );
}

export default MiniTodo;
