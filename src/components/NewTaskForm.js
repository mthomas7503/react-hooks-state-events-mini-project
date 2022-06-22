import React from "react";

function NewTaskForm({categories, details, onTaskFormSubmit, onUserInput, onUserSelect, userCategory}) {
  const options = categories.slice(1).map((category) => <option key={category} >{category}</option>)

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={onUserInput}/>
      </label>
      <label>
        Category
        <select name="category" value={userCategory} onChange={onUserSelect}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
