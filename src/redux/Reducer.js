import { DELETE_TASK, ADD_TASK, DONE_TASK, UPDATE_TASK } from "./constante";
const initState = [
  { id: "1", text: "go to the beach", done: false },
  { id: "2", text: "meeting my mom", done: false },
];
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      let tasksAfterDelete = state.filter((elt) => elt.id !== action.payload);
      return tasksAfterDelete;
    case "ADD_TASK":
    let tasksAfterAdd = [...state,action.payload]
      return tasksAfterAdd
    case UPDATE_TASK:
    let tasksAfterUpdate = state.map((elt) => {
      if (elt.id == action.payload.taskId){
        return{...elt,text:action.payload.text };
      
      } else {
        return elt
      }
    });
    return tasksAfterUpdate
    case DONE_TASK:
    let taskAfterDoneUndone = state.map((elt)=>{
      if(elt.id===action.payload){
        if(elt.done===true){
        return {...elt,done: false}
        }else{
          return {...elt,done: true}
        }
      }
      else{
        return elt;
      }
    }) ;
    return taskAfterDoneUndone;
      default:
      return state;
  }
};
export default Reducer;
