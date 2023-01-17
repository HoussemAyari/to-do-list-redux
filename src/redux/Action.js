import { DELETE_TASK,ADD_TASK,DONE_TASK,UPDATE_TASK } from "./constante";
import TASK from './../components/TASK';

export const deleteTask=(id)=>{
    return {type:"DELETE_TASK", payload:id};}



export const addTask=(task)=>{
    return {type:'ADD_TASK',payload:task}
}

export const doneTask=(id)=>{
    return {type:'DONE_TASK', payload: id}
}

export const updateTask=(taskId, text)=>{
    return {type:'UPDATE_TASK', payload: {taskId, text}}
}
