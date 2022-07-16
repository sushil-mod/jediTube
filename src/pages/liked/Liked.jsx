import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import VideoCard from '../../components/card/VideoCard'

export function Liked() {

  const { likeVideos } = useSelector((store)=>store.likeVideoList);
  const navigate = useNavigate();
  return (
    <div className='generic-list-container'>

      {likeVideos.length >0 ?<div className='generic-video-card-wrapper' > 
        {likeVideos?.map((video)=><VideoCard video={video} key={video._id} />)}
      </div>:
      <div className='flex-center flex-col'><h2>No Liked Videos</h2><button onClick={()=>navigate('/explore') } className='generic-btn' >
        
         Go To Explore</button>  </div>
      }
    
    </div>
  )
}

