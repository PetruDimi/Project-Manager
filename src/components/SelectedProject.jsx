import { useContext } from "react";
import ProjectContext from "../context/ProjectContext";
import ActionContext from "../context/ActionContext";
import Tasks from "./Tasks";

export default function SelectedProject({title, description, date, id}) {
  const ctx = useContext(ProjectContext)
  const actionCtx = useContext(ActionContext)
  
  const deleteHandler = () =>{
    actionCtx.dispatchAction({type:'none'})
    ctx.removeItem(id)
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-950">{title}</h1>
          <button onClick={deleteHandler} className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-slate-400">{date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <Tasks id={id}/>
    </div>
  );
}
