import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import VideoCard from '../../components/card/VideoCard';

export function WatchLater() {

  const { watchLaterVideos } = useSelector((store)=>store.watchLaterVideoList)
  const navigate = useNavigate();
  return (
    <div className='generic-list-container'>

      {watchLaterVideos.length >0 ?<div className='generic-video-card-wrapper' > 
        {watchLaterVideos?.map((video)=><VideoCard video={video} key={video._id} />)}
      </div>:
      <div className='flex-center flex-col'><h2>No Watch Later Videos</h2><button onClick={()=>navigate('/explore') } className='generic-btn' >
         Go To Explore</button>  </div>
      }
    
    </div>
  )
}
