import Button from "./Button";
import ProjectContext from "../context/ProjectContext";
import ActionContext from "../context/ActionContext";

import { useContext } from "react";

export default function ProjectSidebar() {
  const ctx = useContext(ProjectContext);
  const actionCtx = useContext(ActionContext)

  const addProjectHandler = () => {
    actionCtx.dispatchAction({type:'add-project'})
  };

  const selectProjectHandler = (item) => {
    actionCtx.dispatchAction({ type: "selected-project", item });
  };

  const projectList = ctx.items.map((item) => {
    return (
      <li key={item.id}>
        <button
          onClick={selectProjectHandler.bind(null, item)}
          className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover: bg-stone-800"
        >
          {item.title}
        </button>
      </li>
    );
  });
  
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={addProjectHandler}>+ Add Project</Button>
      </div>
      <ul>{projectList}</ul>
    </aside>
  );
}
