import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState ={
    videos:[],
    videoLoader:false,
}

export const getVideoList = createAsyncThunk('videoList/getVideoList',async (_,{rejectWithValue})=>{
    try {
        const res = await axios.get("/api/videos");
        console.log(res.data.videos);
        return res.data.videos;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.res.data);
    }
} )




export const videoSlice = createSlice({
    name:"videoList",
    initialState,
    reducers:{},
    extraReducers:{
        [getVideoList.pending]:(state)=>{
            state.videoLoader = true;
        },
        [getVideoList.fulfilled]:(state,action)=>{
            state.videoLoader = false;
            state.videos = action.payload;
        },
        [getVideoList.rejected]:(state,action)=>{
            state.videoLoader = false;
            
        }
    },
})


export default videoSlice.reducer;