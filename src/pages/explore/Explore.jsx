import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import VideoCard from '../../components/card/VideoCard';
import CategoryChips from '../../components/chips/CategoryChips';
import { getVideoList } from '../../features/video/videoSlice'; 
import { getCategoryList } from '../../features/category/categorySlice';

import '../../components/chips/CategoryChips.css';
import './Explore.css';


export function Explore() {


  const { videos } = useSelector((store)=>store.videoList);
  const { categories } = useSelector((store)=>store.categoryList);

  const dispatch = useDispatch();
  console.log( videos);
  
  useEffect(()=>{
    dispatch(getVideoList());
    dispatch(getCategoryList());
  },[])
 
  
  return ( 
    <div className='explore-container'> 
    
      <div className='category-chips-wrapper'>
        <div className='chips'> All  </div> 
        {categories.map(( category )=><CategoryChips key={category._id} category={category} />)}
      </div>
      <div className='video-card-wrapper' >
        {videos.map((video)=><VideoCard key={video.id} video={video}/> )}
      </div>
    </div>
  )
}
