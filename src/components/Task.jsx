import { useState } from "react";
import Input from "./Input";

export default function Task ({id}) {
  const [taskItems, setTaskItems] = useState([]);

  console.log(id);

  const addTaskHandler = (e) => {
    setTaskItems((prevState) => {
      return [...prevState, e.target.value];
    });
  };

  const deleteTaskHandler = (index) =>{
    setTaskItems((prevState)=>{
        return prevState.filter((item, prevStateindex)=>{return prevStateindex !== index})
    })
  }

  let taskList;

  if (taskItems) {
    taskList = (
      <ul>
        {taskItems.map((item, index) => {
          return (
            <li key={index}>
              <button 
              onClick={deleteTaskHandler.bind(null, index)}
              className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-700 hover:text-stone-900 bg-stone-200 hover:bg-stone-400">
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div>
      <Input label="tasks" onChange={addTaskHandler} />
      {taskList}
    </div>
  );
};
