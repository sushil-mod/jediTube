import React from 'react'
import { useNavigate } from 'react-router-dom'

export function History() {

  const navigate = useNavigate();

  return (
    <div className='generic-list-container'>

      <div className='generic-video-card-wrapper' > 
        videocard
      </div>
      <div className='flex-center flex-col'><h2>No History Videos</h2><button onClick={()=>navigate('/explore') } className='generic-btn' >
         Go To Explore</button>  </div>
    </div>
  )
}

