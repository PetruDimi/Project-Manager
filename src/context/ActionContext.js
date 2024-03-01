import React from "react";

const ActionContext = React.createContext({
    currentAction:{},
    dispatchAction:(action)=>{}
})

export default ActionContext;