import React from "react";

const TaskContext = React.createContext({
    projectTasks:[],
    addTask:(task)=>{},
    deleteTask:(task)=>{}
})

export default TaskContext