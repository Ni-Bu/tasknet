import { React, useState } from "react";
import Dictaphone from "./Speech";
import { ReactComponent as Enter } from "../img/enter.svg";
function InputTask({ taskList, setTaskList }) {
  const [currentItem, setCurrentItem] = useState("");

  const handleChange = (event) => {
    setCurrentItem(event.target.value);
  };

  function handleSpeechToText(value) {
    setCurrentItem(value);
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
    if (currentItem !== "") {
      const tempList = [...taskList];
      tempList.push({
        id: taskList.length,
        data: currentItem,
        miniTodo: [],
        isChecked: false,
        created: Date.now(),
      });
      setTaskList(tempList);
      setCurrentItem("");
    }
  };

  return (
    <form onSubmit={HandleSubmit} className="taskInputField">
      <input
        value={currentItem}
        onChange={handleChange}
        placeholder="Enter task here"
        type="text"
        name="task"
      />
      <Dictaphone
        setTranscript={handleSpeechToText}
        setValue={setCurrentItem}
      />
      <button>
        <Enter />
      </button>
    </form>
  );
}
export default InputTask;
