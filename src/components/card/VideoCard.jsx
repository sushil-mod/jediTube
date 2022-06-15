import React from 'react';
import './VideoCard.css';

function VideoCard({video}) {
  console.log(video)
  return (
    <div title='card' className='video_card'>
      <img className='video_img' src={`https://i.ytimg.com/vi/${video._id}/0.jpg`} alt="video-image" />
    <div  title='card info' className='video_info' >
      <div title='card-avatar'  className='video_avatar' >
        <img className='avatar_img'  src="./assets/banner.jpg" alt="avatar-image" />
      </div>
      <div className='video_title_container'>
        <h3 className='video_title'> { video.description }</h3>
        <h4  className='video_channel' >{video.creator} <i className="fas fa-check-circle" title='verified' style={{ color:"gray"  }} ></i> </h4>
        <h4>hello</h4>
      </div>
      <div className='card_ellipsis'>
      <i className="fas fa-ellipsis-v"></i>
      </div>
    </div>
  </div>
  )
}

export default VideoCard 
