import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    watchLaterVideosLoader : false,
    watchLaterVideos : [],
}

export const addToWatchLaterVideos = createAsyncThunk("watchLaterVideoList/addToWatchLaterVideos",async({video,userToken},{rejectWithValue})=>{
    try {
        const res = await axios.post('/api/user/watchlater',{video:{...video}},{headers:{authorization:userToken}})
        return res.data.watchlater;
    } catch (error) {
        return rejectWithValue(error.res.data);
    }
})

export const removeFromWatchLaterVideos = createAsyncThunk("watchLaterVideoList/removeFromWatchLater",async({video,userToken},{rejectWithValue})=>{
    try {
        const res = await axios.delete(`/api/user/watchlater/${video._id}`,{headers:{authorization:userToken}})
        return res.data.watchlater;
    } catch (error) {
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
            toast.success("video added to watchlater")
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
            toast.success("video removed from watchlater")
        },
        [removeFromWatchLaterVideos.rejected]:(state,action)=>{
            state.watchLaterVideosLoader = false ;
        }
    }
})

export default watchLaterSlice.reducer;