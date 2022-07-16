import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    watchLaterVideosLoader : false,
    watchLaterVideos : [],
}

export const addToWatchLaterVideos = createAsyncThunk("watchLaterVideoList/addToWatchLaterVideos",async({video,userToken},{rejectWithValue})=>{
    try {
        console.log("add watch later",video,userToken);
        const res = await axios.post('/api/user/watchlater',{video:{...video}},{headers:{authorization:userToken}})
        console.log("watchlater",res.data.watchlater);
        return res.data.watchlater;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.res.data);
    }
})

export const removeFromWatchLaterVideos = createAsyncThunk("watchLaterVideoList/removeFromWatchLater",async({video,userToken},{rejectWithValue})=>{
    try {
        console.log("remove watchlater",video,userToken)
        const res = await axios.delete(`/api/user/watchlater/${video._id}`,{headers:{authorization:userToken}})
        console.log("hello",res.data.watchlater);
        return res.data.watchlater;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.res.data);
    }
})

const watchLaterSlice = createSlice({
    name:'watchLaterVideoList',
    initialState,
    reducers:{},
    extraReducers:{
        [addToWatchLaterVideos.pending]:(state)=>{
            state.watchLaterVideosLoader = true ;
        },
        [addToWatchLaterVideos.fulfilled]:(state,action)=>{
            state.watchLaterVideosLoader = false ;
            state.watchLaterVideos = action.payload ;
        },
        [addToWatchLaterVideos.rejected]:(state,action)=>{
            state.watchLaterVideosLoader = false ;
        },
        [removeFromWatchLaterVideos.pending]:(state)=>{
            state.watchLaterVideosLoader = true ;
        },
        [removeFromWatchLaterVideos.fulfilled]:(state,action)=>{
            state.watchLaterVideosLoader = false ;
            state.watchLaterVideos = action.payload ;
        },
        [removeFromWatchLaterVideos.rejected]:(state,action)=>{
            state.watchLaterVideosLoader = false ;
        }
    }
})

export default watchLaterSlice.reducer;