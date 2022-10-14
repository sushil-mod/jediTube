import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuggestedVideoCard.css';

function SuggestedVideoCard({suggestedVideo}) {

  const navigate = useNavigate();

  const { _id ,title,creator,uploded  } = suggestedVideo
  return (
    <div className='suggested-video-card' onClick={()=>navigate(`/explore/${_id}`)} >
    <img className='suggested-video-img' src={`https://i.ytimg.com/vi/${_id}/0.jpg`} alt="video-image" />
    <div className='suggested-video-info'>
       
        <p className='suggested-video-title'>{title}</p>
        <p className='suggested-video-creator' >{creator}</p>
        <p className='suggested-video-uploaded'>{uploded}</p>
        
    </div>
</div>
  )
}

export default SuggestedVideoCard;
