import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import VideoCard from '../../components/card/VideoCard';
import './History.css';
import { removeAllFromHistoryVideos } from '../../features/history/historySlice';

export function History() {

  const navigate = useNavigate();
  const { historyVideos } = useSelector((store)=>store.historyVideoList);
  const dispatch = useDispatch();
  const { userToken } = useSelector((store)=>store.authentication)

  return (
    <div className='generic-list-container'>
      
        <div className='history-title-container'>
          <h2 className='history-title' >History<span className='history-lenght' >({ historyVideos.length })</span></h2>
          <button  className={`history-clearAll-btn ${historyVideos.length>0?"active-btn": "inactive-btn" } `} onClick={()=>dispatch(removeAllFromHistoryVideos(userToken))} >Clear All</button>
        </div>
      {historyVideos.length>0?<div>
        
        <div className='generic-video-card-wrapper' > 
          {historyVideos?.map((video)=><VideoCard video={video} key={video._id} />) }
        </div>
      </div>
      :
      <div className='flex-center flex-col'>
        <h2>No History Videos</h2>
        <button onClick={()=>navigate('/explore') } className='generic-btn' >
         Go To Explore
        </button>
      </div>}
      
    </div>
  )
}

