import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ContextProvider from "./context/ContextProvider.jsx";
import ActionCtxProvider from "./context/ActionCtxProvider.jsx";
import TaskCtxProvider from "./context/TaskCtxProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <ActionCtxProvider>
        <TaskCtxProvider>
        <App />
        </TaskCtxProvider>
      </ActionCtxProvider>
    </ContextProvider>
  </React.StrictMode>
);
