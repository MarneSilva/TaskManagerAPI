"use client"
import React, {createContext, useState} from 'react'
type TaskContextType = {
    tasks: string[]
    addTask: (description:string) => void
    removeTask: (taskIndex:number) => void
}
export const TaskContext = createContext({} as TaskContextType)
const TaskContextProvider =({ children } :  Readonly<{ children: React.ReactNode; }>) => {
    const [tasks, setTask] = useState<string[]>([])
    const addTask = (description: string) => {
        setTask([...tasks, description])
    }

    const removeTask = (taskIndex:number) => {
        setTask(tasks.filter((_, index) => taskIndex !== index))
    }
   
    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;