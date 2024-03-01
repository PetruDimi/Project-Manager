import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";
import ProjectContext from "../context/ProjectContext";
import ActionContext from "../context/ActionContext";
import { useContext } from "react";

export default function NoProjectSelected() {
  const actionCtx = useContext(ActionContext)

  const addProjectHandler = () => {
    actionCtx.dispatchAction({type: 'add-project'})
  };

  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold test-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={addProjectHandler}>Create new Project</Button>
      </p>
    </div>
  );
}
