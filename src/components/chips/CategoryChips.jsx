import React from 'react';
import './CategoryChips.css';

function CategoryChips({category}) {
      console.log(category.icon ) 
  return (
    <div className='chips'>
      {category.categoryName} 
      <i className={category.icon}></i> 
    </div> 
  )
}

export default CategoryChips
