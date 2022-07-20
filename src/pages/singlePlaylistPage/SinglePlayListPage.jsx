import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import VideoCard from '../../components/card/VideoCard';

function SinglePlayListPage() {

    const { playlistId } = useParams();
    const { playlists } = useSelector((store)=>store.playlist);
    const { userToken } = useSelector((store)=>store.authentication)
    const dispatch =useDispatch();
    const [playlist,setPlaylist] =useState({})

    const getPlaylist =async () =>{
        try {
            const res = await axios.get(`/api/user/playlists/${playlistId}`,{headers:{authorization:userToken}})
           
            setPlaylist(res.data.playlist);
        } catch (error) {
          return rejectWithValue(error.res.data)
        
    }}
    useEffect(()=>{
        getPlaylist();
    },[dispatch])
    


  return (
    <div className=' generic-list-container '>
      <h2> {playlist?.title}</h2>
      <div className='generic-video-card-wrapper' >
        {playlist?.videos?.map((video)=><VideoCard video={video} key={video._id}  />)}
      </div>
    </div>
  )
}

export default SinglePlayListPage;
