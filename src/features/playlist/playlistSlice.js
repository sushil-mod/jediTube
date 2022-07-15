import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState ={
    playlists:[],
    selectedVideo:{},
    playlistLoader:false,
}

export const addPlaylist = createAsyncThunk('playlist/addPlaylist',async ({userInput,userToken},{rejectWithValue})=>{
    try {
        console.log("slice",userInput,userToken);
        
        const res = await axios.post("/api/user/playlists",{playlist:{title:userInput,description:""}},{headers:{authorization:userToken}});
        
        console.log("playlist",res.data.playlists);
        return res.data.playlists;
    } catch (error) {
        console.log("playlist",error);
        return rejectWithValue(error.res.data)
    }
})

export const removePlaylist = createAsyncThunk('playlist/removePlaylist',async({playlist,userToken},{})=>{
    try {
        const res = await axios.delete(`/api/user/playlists/${playlist._id}`,{headers:{authorization:userToken}})
        console.log("remove",res.data.playlists);
        return res.data.playlists;
    } catch (error) {
        console.log("remove error",error)
    }
})

export const addVideoToPlaylist = createAsyncThunk('playlist/addVideoToPlaylist',async({playlist,selectedVideo,userToken},{rejectWithValue})=>{
    try {
        console.log("addchecked",playlist,selectedVideo,userToken)

        const res = await axios.post(`api/user/playlists/${playlist._id}`,{video:{...selectedVideo}},{headers:{authorization:userToken}});

        console.log("addvideo",res.data.playlist);

        return res.data.playlist;

    } catch (error) {
        console.log("pla",error);
        return rejectWithValue(error.res.data)
    }
})

export const removeVideoFromPlaylist = createAsyncThunk('playlist/removeVideoFromPlaylist',async({playlist,selectedVideo,userToken},{})=>{
    try {
        console.log("removechecked",playlist,selectedVideo,userToken)

        const res = await axios.delete(`api/user/playlists/${playlist._id}/${selectedVideo._id}`,{headers:{authorization:userToken}});

        console.log("removevideo",res.data.playlist);

        return res.data.playlist;

    } catch (error) {
        console.log("pla",error);
        return rejectWithValue(error.res.data)
    }
})

export const playlistSlice = createSlice({
    name:"playlist",
    initialState,
    reducers:{
        addSelectedVideo:(state,action) => {
            state.selectedVideo = action.payload;
        },
    },
    extraReducers:{
        [addPlaylist.pending]:(state)=>{
            state.playlistLoader = true;
        },
        [addPlaylist.fulfilled]:(state,action)=>{
            state.playlistLoader = false;
            state.playlists = action.payload;
        },
        [addPlaylist.rejected]:(state,action)=>{
            state.playlistLoader = false;
        },
        [removePlaylist.pending]:(state)=>{
            state.playlistLoader = true;
        },
        [removePlaylist.fulfilled]:(state,action)=>{
            state.playlistLoader = false;
            state.playlists = action.payload;
        },
        [removePlaylist.rejected]:(state,action)=>{
            state.playlistLoader = false;
        },
        [addVideoToPlaylist.pending]:(state)=>{
            state.playlistLoader = true;
        },
        [addVideoToPlaylist.fulfilled]:(state,action)=>{
            state.playlists = state.playlists.map((playlist)=>playlist._id === action.payload._id ?action.payload : playlist )
            state.playlistLoader = false;
        },
        [addVideoToPlaylist.rejected]:(state,action)=>{
            state.playlistLoader = false;
        },
        [removeVideoFromPlaylist.pending]:(state)=>{
            state.playlistLoader = true;
        },
        [removeVideoFromPlaylist.fulfilled]:(state,action)=>{
            state.playlistLoader = false;
            state.playlists = state.playlists.map((playlist)=>playlist._id === action.payload._id ?action.payload : playlist )
        },
        [removeVideoFromPlaylist.rejected]:(state,action)=>{
            state.playlistLoader = false;
        },
    },
})
export const { addSelectedVideo } = playlistSlice.actions;
export default playlistSlice.reducer;