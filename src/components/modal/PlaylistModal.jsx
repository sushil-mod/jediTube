import React ,{ useState } from 'react'
import {useSelector,useDispatch } from 'react-redux'
import useClickOutside from '../../hooks/useClickOutside';
import './PlaylistModal.css';
import {useRef} from 'react';
import { closeCreateModal, closeModal, openCreateModal } from '../../features/modal/modalSlice';
import { addPlaylist, addVideoToPlaylist, removeVideoFromPlaylist } from '../../features/playlist/playlistSlice';

function PlaylistModal() {
    
    const [userInput,setUserInput] = useState("");
    
    const { showModal,showCreateModal } = useSelector((store)=>store.modal)
    const { userToken } = useSelector((store)=>store.authentication)
    const { playlists,selectedVideo } = useSelector((store)=>store.playlist)
    
    const dispatch = useDispatch();
    const domNode = useClickOutside(()=>{dispatch(closeModal());dispatch(closeCreateModal());})
    
    console.log(userInput);
    console.log(userToken);
    console.log("playlists",playlists);
    console.log("video",selectedVideo);


    const createPlaylist = (e) => {
      e.preventDefault();
      dispatch(addPlaylist({userInput,userToken}));
      setUserInput("");
      dispatch(closeCreateModal());
    }


  return (
    <div  className={`modal-wrapper ${showModal?'display-block':'display-none'} `} >
      
           
        <div ref={domNode} className="modal-container" >
          <div className='modal-title'>
            <p>Save to playlist </p>
            <div className='modal-title-icon' onClick={()=>{dispatch(closeModal());dispatch(closeCreateModal());}}>
              <i className="far fa-times"></i>
            </div>
          </div> 
          
          <div className='playlist-wrapper' >{playlists.length > 0 && playlists.map((playlist)=><div className='modal-list' key={playlist._id} >
              <label className='modal-list-item'>
                <input type="checkbox" 
                  onChange={(e)=>e.target.checked?dispatch(addVideoToPlaylist({playlist,selectedVideo,userToken}))
                  :dispatch(removeVideoFromPlaylist({playlist,selectedVideo,userToken})) }
                  checked={playlist.videos?.some((video)=>video._id === selectedVideo._id) }/>
                <span className='modal-list-title'>  {playlist.title}</span>
              </label>
            </div>)}
          </div>


          {!showCreateModal?<div className='modal-create' onClick={()=>dispatch(openCreateModal())} >
            <div className='modal-create-icon'><i className="far fa-plus"></i> </div>
            <p>Create new playlist</p>
          </div>
            :
          <form className='modal-playlist' onSubmit={(e)=>createPlaylist(e)} >
            <label  >Name
              <input className='modal-playlist-input' type="text"  placeholder="Enter Playlist Name...." value={userInput}
              onChange={(e)=>setUserInput(e.target.value)} required />
            </label>
            <button className='modal-playlist-btn' type='submit'>Create </button>
          </form>
          }



        </div> 
            
            
    </div>
  )
}

export default PlaylistModal;
