import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
 const [tasks, setTasks] = useState(TASKS)
 const [details, setDetails] = useState("")
 const [userCategory, setUserCategory] = useState('Code')

 function handleClick(event) {
  
  if (event.target.innerText !== "All") {
    setTasks(TASKS.filter((task) => task.category === event.target.innerText))}

  else if (event.target.innerText==="All") {setTasks(TASKS)}
 }

 function handleChange(event){
  setDetails(event.target.value)
  console.log(details)
 }

 function handleSelect(event) {
  setUserCategory(event.target.value)
 }

 function onTaskFormSubmit(event){
  event.preventDefault()
  const newTask = {
    category: userCategory,
    text: details
  }
  if (details <= 0) {return alert("You must input data!")}

  else {
  setTasks([...tasks, newTask])}
 }
   
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelect={handleClick}/>
      <NewTaskForm 
      categories={CATEGORIES} 
      details={details} 
      onUserInput={handleChange} 
      onTaskFormSubmit={onTaskFormSubmit}
      onUserSelect={handleSelect}
      userCategory={userCategory}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
