import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PlaylistCard from '../../components/card/PlaylistCard';
import './Playlist.css';

export function Playlist() {

  const { playlists } = useSelector((store)=>store.playlist)
  const navigate = useNavigate()
  return (
    <div className='playlists-wrapper'>
     
      <div className='playlist-header'> 
        <h1>Your Playlists</h1>
        <h3>({playlists.length})</h3>
      </div>

      {playlists.length>0 ? playlists.map((playlist)=><PlaylistCard playlist={playlist} key={playlist._id} />):
       <div className='flex-center'><button onClick={()=>navigate('/explore') } className='playlist-btn' > Go To Explore</button>  </div>
      }

    </div> 
  )
}
