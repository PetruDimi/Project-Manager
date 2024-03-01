// update Tasks with check box to mark the completion of the task, that can also uncheck the task;
// 

import TaskItem from "./TaskItem";
import { useState, useContext } from "react";

import TaskContext from "../context/TaskContext";

export default function Tasks({ id }) {
  const [enteredTask, setEnteredTask] = useState("");
  const taskCtx = useContext(TaskContext);

  const taskHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  const addTaskHandler = () => {
    if (enteredTask.trim().length === 0) {
      return;
    }
    taskCtx.addTask({ text: enteredTask, projectId: id });
    setEnteredTask("");
  };

  const deleteTaskHandler = (index) => {
    taskCtx.deleteTask({ index, projectId: id });
  };

  let projectTaskList = []
  taskCtx.projectTasks.forEach(item=>{
    if(item.projectId === id){
      projectTaskList.push(item)
    }
  })
  
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          value={enteredTask}
          onChange={taskHandler}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={addTaskHandler}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      {projectTaskList.length === 0 ? (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 rounded-md bg-stone-100 border-purple-950">
          {projectTaskList[0].projectTaskItems.map((itemText, index) => {
            return (
              <TaskItem
                onDelete={deleteTaskHandler.bind(null, index)}
                key={index}
                text={itemText}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}
