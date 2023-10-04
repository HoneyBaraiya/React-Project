import React from 'react';

const Categories = ({allCategories,filterCategory}) => {
  return (
    <div className="btn-container">
      {
        allCategories.map((category,index)=>{
          return(
            <button type="button"
            className="filter-btn"
            key={index} 
            onClick={()=>filterCategory(category)}>{category}</button>
          )
        }
        )
      }
    </div>
  );
};

export default Categories;
