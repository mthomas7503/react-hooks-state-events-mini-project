import React from "react";

function CategoryFilter({categories, onSelect}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) =>{return (<button onClick={onSelect} key={index}>{category}</button>)})}
    </div>
  );
}

export default CategoryFilter;
