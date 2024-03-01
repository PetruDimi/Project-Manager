import Input from "./Input";
import { useState } from "react";
import { useContext } from "react";

import ProjectContext from "../context/ProjectContext";
import ActionContext from "../context/ActionContext";

export default function NewProject() {
  const defaultData = { title: "", description: "", date: "" };
  const [inputData, setInputData] = useState(defaultData);
  const [isHovering, setIsHovering] = useState(false);
  const ctx = useContext(ProjectContext);
  const actionCtx = useContext(ActionContext)

  let formIsValid = false;
  if (inputData.title && inputData.description && inputData.date) {
    formIsValid = true;
  }

  const hoverContent =
    isHovering && !formIsValid ? (
      <p className="font-semibold text-pink-500">
        Please complete all the input fields in order to succesfully create a
        new project.
      </p>
    ) : (
      ""
    );

  const titleHandler = (e) => {
    setInputData((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const descriptionHandler = (e) => {
    setInputData((prevState) => {
      return { ...prevState, description: e.target.value };
    });
  };
  const dateHandler = (e) => {
    setInputData((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(!formIsValid){
      return 
    }

    const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
    const formatedDate = formatter.format(new Date(inputData.date))
    const configuredData = { ...inputData, date: formatedDate,id: Math.random() };
    ctx.addItem(configuredData);
    actionCtx.dispatchAction({type: 'none'});
    setInputData(defaultData);
  };

  return (
    <div className="w-[35rem] mt-16">
      <form onSubmit={submitHandler}>
        <Input value={inputData.title} onChange={titleHandler} label="Title" />
        <Input
          value={inputData.description}
          onChange={descriptionHandler}
          label="Description"
          textarea
        />
        <Input
          type="date"
          value={inputData.date}
          onChange={dateHandler}
          label="Due Date"
        />
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onMouseOver={() => {
                setIsHovering(true);
              }}
              onMouseOut={() => {
                setIsHovering(false);
              }}
              type="submit"
              disabled={!formIsValid}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save
            </button>
          </li>
        </menu>
        {hoverContent}
      </form>
    </div>
  );
}
