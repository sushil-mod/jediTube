import React , { useState ,useEffect  }from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './VideoCard.css';
import { MdOutlineWatchLater , MdPlaylistPlay } from 'react-icons/md'
import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import PlaylistModal from '../modal/PlaylistModal';
import { openModal } from '../../features/modal/modalSlice';
import { addSelectedVideo } from '../../features/playlist/playlistSlice';
// const useClickOutside = (func) =>{
// const domNode = useRef();
//   useEffect(()=>{
//       let handler = (e)=>{
//         if(!domNode.current.contains(e.target) ) {
//           func();
//         }}
//       document.addEventListener("mousedown",handler);
//     return () =>{
//       document.removeEventListener("mousedown",handler);
//     }
//   })
//   return domNode;
// } 

function VideoCard({video}) {

  const [showOption , setShowOption] = useState(false)
  const { userToken } = useSelector((store)=>store.authentication)
  // console.log(video)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const domNode = useClickOutside(()=>{ setShowOption(false) });

  const selectedVideoHandler = () =>{
    
    if(userToken){
      dispatch(openModal());
      dispatch(addSelectedVideo(video));
    }else{
      navigate('/login')
    }
    
  }

  return (
    <div title='card' className='video_card'> 
    
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
      <div ref={domNode} className='card_ellipsis' onClick={()=>setShowOption(!showOption)} >
        
        <i className="fas fa-ellipsis-v"></i>

        <div className={`card_ellipsis_option ${!showOption && "display-none" } `} >
          <div className='option_container' >
            <div className='option_icon' >
              <MdOutlineWatchLater/> 
            </div>
            Save to Watch Later
          </div>
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

export default VideoCard 
