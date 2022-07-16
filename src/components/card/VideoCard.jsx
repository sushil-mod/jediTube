import React , { useState ,useEffect  }from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './VideoCard.css';
import { MdOutlineWatchLater , MdPlaylistPlay ,MdWatchLater ,MdThumbUp} from 'react-icons/md'
import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import PlaylistModal from '../modal/PlaylistModal';
import { openModal } from '../../features/modal/modalSlice';
import { addSelectedVideo, removeVideoFromPlaylist } from '../../features/playlist/playlistSlice';
import { addToWatchLaterVideos, removeFromWatchLaterVideos } from '../../features/watchlater/watchLaterSlice';
import { removeFromLikedVideos } from '../../features/like/likeSlice';


function VideoCard({video}) {

 
  const [showOption , setShowOption] = useState(false);
  const { userToken } = useSelector((store)=>store.authentication);
  const { watchLaterVideos } = useSelector((store)=>store.watchLaterVideoList)
 


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const domNode = useClickOutside(()=>{ setShowOption(false) });

  const selectedVideoHandler = () =>{
    
    if(userToken){
      dispatch(openModal());
      dispatch(addSelectedVideo(video));
    }else{
      navigate('/login');
    }  
  }

  const checkInWatchLater = watchLaterVideos?.some((item)=>item._id === video._id);
 
 

  return (
    <div title='card' className='video_card' onClick={()=>{dispatch(addSelectedVideo(video));navigate(`/explore/${video._id}`)}} > 
    
      <img className='video_img' src={`https://i.ytimg.com/vi/${video._id}/0.jpg`} alt="video-image" />
    <div  title='card info' className='video_info' >
      <div title='card-avatar'  className='video_avatar' >
        <img className='avatar_img'  src="./assets/banner.jpg" alt="avatar-image" />
      </div>
      <div className='video_title_container'>
        <h3 className='video_title'> { video.title }</h3>
        <h4  className='video_channel' >{video.creator} <i className="fas fa-check-circle video_channel" title='verified' ></i> </h4>
        <h4>hello</h4>
      </div>

      <div ref={domNode} className='card_ellipsis' onClick={(e)=>{ e.stopPropagation(); setShowOption(!showOption);}} >
        <i className="fas fa-ellipsis-v"></i>
        <div className={`card_ellipsis_option ${!showOption && "display-none" } `} >
          {!checkInWatchLater ?<div className='option_container' onClick={()=>userToken?dispatch(addToWatchLaterVideos({ video,userToken })):navigate('/login',{state:{from:location}})} >
            <div className='option_icon' >
              <MdOutlineWatchLater/> 
            </div>
            Save to Watch Later
          </div>:
          <div className='option_container option-icon-remove' onClick={()=>userToken?dispatch(removeFromWatchLaterVideos({ video,userToken })):navigate('/login',{state:{from:location}})}>
            <div className='option_icon' >
              <MdWatchLater/> 
            </div>
            Remove from Watch Later
          </div>}
          {pathname === "/liked" && <div className='option_container option-icon-remove' onClick={()=>dispatch(removeFromLikedVideos({ video,userToken }))} >
            <div className='option_icon' >
            <MdThumbUp/>
            </div>
            remove from like 
          </div>}

          <div className='option_container' onClick={selectedVideoHandler} >
            <div className='option_icon' >
              <MdPlaylistPlay/> 
            </div>
            Save to Playlists
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default VideoCard ;
