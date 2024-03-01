import ProjectContext from "./ProjectContext";
import { useState } from "react";

export default function ContextProvider({ children }) {
  const [projectItems, setProjectItems] = useState([]);

  const addItemHandler = (item) => {
    setProjectItems((prevState) => {
      return [...prevState, item];
    });
  };

  const removeItemHandler = (id) => {
    setProjectItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const ctx = {
    items: projectItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <ProjectContext.Provider value={ctx}>{children}</ProjectContext.Provider>
  );
}
