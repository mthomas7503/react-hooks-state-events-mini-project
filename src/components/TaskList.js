import React from "react";
import Task from "./Task"

function TaskList({tasks}) {
 const taskItems = tasks.map((item, index) => {return (<Task category={item.category} text={item.text} key={index}/>)})

  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
