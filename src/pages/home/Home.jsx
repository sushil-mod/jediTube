import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Banner from '../../components/banner/Banner';
import CategoryCard from '../../components/card/CategoryCard';
import { getCategoryList } from '../../features/category/categorySlice';
import './home.css';



export function Home () {

  const { categories } = useSelector((store)=>store.categoryList);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategoryList());
  },[])


  

  return <>
    <Banner/>
    <div className='category_wrapper'>
      {categories.map(( category )=> <CategoryCard key={category._id}  category={category} /> )
      }
        
    </div>
  </>

}