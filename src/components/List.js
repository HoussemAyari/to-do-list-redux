import React from "react";
import { useSelector } from "react-redux";
import TASK from "./TASK";

function List() {
  const tasks = useSelector((state) => state);
  return (
    <div style={{display:'flex',justifyContent:"space-around"}}>
      {tasks.map((elt) => (
        <TASK key={elt.id} task={elt} />
      ))}
    </div>
  );
}

export default List;
