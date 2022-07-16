import React from 'react';
import './SuggestedVideoCard.css';

function SuggestedVideoCard() {
  return (
    <div className='suggested-video-card'>
    <img className='suggested-video-img' src={`https://i.ytimg.com/vi/u71pHOyvBp0/0.jpg`}alt="video-image" />
    <div className='suggested-video-info'>
       
        <p className='suggested-video-title'>title sdsd asdsd sd sd sds sds dsd sd sd sd sdas sd dsdsa sdsd </p>
        <p className='suggested-video-creator' >creator name</p>
        <p className='suggested-video-uploaded'>uploded</p>
        
    </div>
</div>
  )
}

export default SuggestedVideoCard;
