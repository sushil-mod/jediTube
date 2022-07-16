import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SuggestedVideoCard from '../../components/card/SuggestedVideoCard';
import { addToLikedVideos, removeFromLikedVideos } from '../../features/like/likeSlice';
import { openModal } from '../../features/modal/modalSlice';
import { addSelectedVideo } from '../../features/playlist/playlistSlice';
import { addToWatchLaterVideos, removeFromWatchLaterVideos } from '../../features/watchlater/watchLaterSlice';
import './SingleVideoPage.css';

function SingleVideoPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { videoId } = useParams();
  
    const { userToken } = useSelector((store)=>store.authentication);
    const { likeVideos } = useSelector((store)=>store.likeVideoList);
    const { playlists, selectedVideo } = useSelector((store)=>store.playlist);
    const { watchLaterVideos } = useSelector((store)=>store.watchLaterVideoList);
   
    const { videos  } = useSelector((store)=>store.videoList);
    const [video,setVideo] = useState({});
    const getVideo =async () =>{
        const res = await axios.get(`/api/video/${videoId}`)
        setVideo(res.data.video);
    }
    useEffect(()=>{
        getVideo();
    },[])


    const checkInlike = likeVideos?.some((item)=>item._id === video._id);
    const checkInWatchLater = watchLaterVideos?.some((item)=>item._id === video._id);
   

    const saveToPlaylistHandler = () =>{
    
        if(userToken){
          
          dispatch(addSelectedVideo(video));
          dispatch(openModal());
        }else{
          navigate('/login',{state:{from:location}});
        }
        
      }

  return (
    <div  className="single-video-wrapper ">
        <div className=' single-video-container' > 
            <div className='single-video-frame'>
                <iframe 
                src={`https://www.youtube.com/embed/${videoId}`} 
                frameBorder="0"
                width='100%'
                height='100%'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen={true}>
                </iframe>
            </div>
            <div className='single-video-details'>
                <div className='single-video-title'>
                    {video.title}
                </div>
                <div className='single-video-info'>
                    <div className='single-video-uploaded'>{video.uploaded}</div>
                    <div className='single-video-icons'>
                    {checkInlike?<i className="fas fa-thumbs-up" onClick={()=>dispatch(removeFromLikedVideos({ video,userToken }))} ></i>:
                    <i className="fal fa-thumbs-up" onClick={()=>dispatch(addToLikedVideos({video,userToken}))} ></i>}
                    
                    
                    {checkInWatchLater?<i className="fas fa-clock" onClick={()=>dispatch(removeFromWatchLaterVideos({video,userToken}))} ></i>:
                    <i className="fal fa-clock" onClick={()=>dispatch(addToWatchLaterVideos({video,userToken}))} ></i>}
                    

                    <i className="fas fa-play-circle single-video-playlist-icon" onClick={saveToPlaylistHandler} > <span className='single-video-playlist-text'> Save to playlist</span></i>
                    </div>
                </div>
                <hr />
                <p>{video.description}</p>
            </div>
        </div>
        
        <div className='video-suggestion-container '> 
            <SuggestedVideoCard/>
        </div>
    </div>
  )
}

export default SingleVideoPage;
