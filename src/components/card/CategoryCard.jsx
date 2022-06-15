import React from 'react';
import './CategoryCard.css';

function CategoryCard({category}) {
  return (
    <div className='category_card'>
        <img className='category_img'  src={category.image} alt={category.categoryName} />
        
        <div className='flex-center text_overlay'>
          <div className='category_text' >{category.categoryName}</div>
        </div>
      </div>
  )
}

export default CategoryCard
