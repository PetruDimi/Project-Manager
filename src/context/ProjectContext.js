import React from "react"

const ProjectContext = React.createContext({
    items:[],
    addItem: (item)=>{},
    removeItem: (item)=>{}
})

export default ProjectContext;
