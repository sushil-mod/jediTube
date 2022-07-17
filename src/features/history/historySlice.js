import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    historyVideosLoader : false,
    historyVideos : [],
}

export const addToHistoryVideos = createAsyncThunk("historyVideoList/addToHistoryVideos",async({video,userToken},{rejectWithValue})=>{
    try {
        console.log("history add",video,userToken);
        const res = await axios.post("/api/user/history",{video:{...video}},{headers:{authorization:userToken}})
        console.log(res.data.history);
        return res.data.history;
    } catch (error) {
        console.log(error);
        rejectWithValue(error.res.data);
    }
})

export const removeFromHistoryVideos = createAsyncThunk("historyVideoList/removeFromHistoryVideos",async({video,userToken},{})=>{
    try {
        console.log("history remove",video,userToken);
        const res = await axios.delete(`/api/user/history/${video._id}`,{headers:{authorization:userToken}})
        console.log("remove req",res.data.history);
        return res.data.history;
    } catch (error) {
        console.log(error);
        rejectWithValue(error.res.data);
    }
})

export const removeAllFromHistoryVideos = createAsyncThunk("historyVideoList/removeAllFromHistoryVideos",async(userToken,{rejectWithValue})=>{
    try {
        console.log("remove all",userToken);
        const res = await axios.delete("/api/user/history/all",{headers:{authorization:userToken}})
        console.log("remove all res",res);
        return res.data.history; 
        
    } catch (error) {
        console.log(error);
        rejectWithValue(error.res.data);
    }
})

const historySlice = createSlice({
    name:"historyVideoList",
    initialState,
    reducers:{},
    extraReducers:{
        [addToHistoryVideos.pending]:(state)=>{
            state.historyVideosLoader = true ;
        },
        [addToHistoryVideos.fulfilled]:(state,action)=>{
            state.historyVideosLoader = false ;
            state.historyVideos = action.payload ;
        },
        [addToHistoryVideos.rejected]:(state,action)=>{
            state.historyVideosLoader = false ;
        },
        [removeFromHistoryVideos.pending]:(state)=>{
            state.historyVideosLoader = true ;
        },
        [removeFromHistoryVideos.fulfilled]:(state,action)=>{
            state.historyVideosLoader = true ;
            state.historyVideos = action.payload ;
        },
        [removeFromHistoryVideos.rejected]:(state,action)=>{
            state.historyVideosLoader = true ;
        },
        [removeAllFromHistoryVideos.pending]:(state)=>{
            state.historyVideosLoader = true ;
        },
        [removeAllFromHistoryVideos.fulfilled]:(state,action)=>{
            state.historyVideosLoader = true ;
            state.historyVideos = action.payload ;
        },
        [removeAllFromHistoryVideos.rejected]:(state,action)=>{
            state.historyVideosLoader = true ;
        },
        
    },
})

export default historySlice.reducer;
