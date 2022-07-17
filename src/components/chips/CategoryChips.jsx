import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedCategory } from '../../features/category/categorySlice';
import './CategoryChips.css';

function CategoryChips({category}) {
      console.log(category.icon ) 

      const {selectedCategory } = useSelector((store)=>store.categoryList);
      const dispatch = useDispatch();

  return (
    <div className={`chips ${selectedCategory === category.categoryName && "chip-active"}`} onClick={()=>dispatch(updateSelectedCategory(category.categoryName))} >
      {category.categoryName} 
      <i className={category.icon}></i> 
    </div> 
  )
}

export default CategoryChips;
