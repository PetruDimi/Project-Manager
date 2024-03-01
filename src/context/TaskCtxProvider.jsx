import TaskContext from "./TaskContext";
import { useState } from "react";

export default function TaskCtxProvider({ children }) {
  const [taskItems, setTaskItems] = useState([]);

  const addTaskHandler = (addedItem) => {
    const existingIndex = taskItems.findIndex(
      (taskItem) => taskItem.projectId === addedItem.projectId
    );

    if (existingIndex === -1) {
      setTaskItems((prevState) => {
        const newTask = {
          projectTaskItems: [addedItem.text],
          projectId: addedItem.projectId,
        };
        return [...prevState, newTask];
      });
    } else {
      setTaskItems((prevState) => {
        const updatedTasks = {
          projectTaskItems: [
            ...prevState[existingIndex].projectTaskItems,
            addedItem.text,
          ],
          projectId: addedItem.projectId,
        };

        let updatedTaskItems = [...prevState];
        updatedTaskItems[existingIndex] = updatedTasks;

        return updatedTaskItems;
      });
    }
  };

  const deleteTaskHandler = (deleteItem) => {
    const deleteItemIndex = taskItems.findIndex(
      (taskItem) => taskItem.projectId === deleteItem.projectId
    );

    setTaskItems((prevState) => {
      const updatedProjectTaskItems = prevState[
        deleteItemIndex
      ].projectTaskItems.filter(
        (item, itemIndex) => itemIndex !== deleteItem.index
      );

      let updatedTaskItems;

      if (updatedProjectTaskItems.length === 0) {
        updatedTaskItems = prevState.filter(
          (taskItem) => taskItem.projectId !== deleteItem.projectId
        );
      } else {
        const updatedTasks = {
          projectTaskItems: updatedProjectTaskItems,
          projectId: deleteItem.projectId,
        };

        updatedTaskItems = [...prevState];
        updatedTaskItems[deleteItemIndex] = updatedTasks;
      }
      return updatedTaskItems
    });
  };

  const taskCtx = {
    projectTasks: taskItems,
    addTask: addTaskHandler,
    deleteTask: deleteTaskHandler,
  };
  return (
    <TaskContext.Provider value={taskCtx}>{children}</TaskContext.Provider>
  );
}
