import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removePlaylist } from '../../features/playlist/playlistSlice';
import './PlaylistCard.css';

function PlaylistCard({playlist}) {

  const { userToken } = useSelector((store)=>store.authentication)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='playlist-card' onClick={()=>navigate(`/playlist/${playlist._id}`)} >
    <img src="./assets/banner2.jpg" alt="playlist image" className='playlist-card-img' />
    <div className='playlist-card-title' >
      <div className='playlist-card-info' > 
        <div >{playlist.title} </div>
        <h6>{playlist.videos.length} Videos</h6>
      </div>
      <div className='playlist-card-icon' onClick={(e)=>{e.stopPropagation(); dispatch(removePlaylist({playlist,userToken}))}} > <i className="fas fa-trash"></i> </div>  
    </div>
    </div>
  )
}

export default PlaylistCard;
