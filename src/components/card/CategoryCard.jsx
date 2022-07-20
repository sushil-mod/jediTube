import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateSelectedCategory } from '../../features/category/categorySlice';
import './CategoryCard.css';

function CategoryCard({category}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='category_card' onClick={()=>{dispatch(updateSelectedCategory(category.categoryName));navigate("/explore")}} >
        <img className='category_img'  src={category.image} alt={category.categoryName} />
        
        <div className='flex-center text_overlay'>
          <div className='category_text' >{category.categoryName}</div>
        </div>
      </div>
  )
}

export default CategoryCard
