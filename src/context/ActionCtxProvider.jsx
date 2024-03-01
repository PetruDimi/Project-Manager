import ActionContext from "./ActionContext";
import { useState } from "react";

export default function ActionCtxProvider({ children }) {
  const [action, setAction] = useState({
    type: 'none',
    item: {}
  });

  const actionHandler = (action) => {
    setAction(action);
  };

  const actionCtx = {
    currentAction: action,
    dispatchAction: actionHandler
  };
  return (
    <ActionContext.Provider value={actionCtx}>
      {children}
    </ActionContext.Provider>
  );
}
