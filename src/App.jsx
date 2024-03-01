import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

import { useContext } from "react";
import ActionContext from "./context/ActionContext";

function App() {
  const actionCtx = useContext(ActionContext);

  let content;
  if (actionCtx.currentAction.type === "none") {
    content = <NoProjectSelected />;
  } else if (actionCtx.currentAction.type === "add-project") {
    content = <NewProject />;
  } else if (actionCtx.currentAction.type === "selected-project") {
    content = <SelectedProject {...actionCtx.currentAction.item} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      {content}
    </main>
  );
}

export default App;
