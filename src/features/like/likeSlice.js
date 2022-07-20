import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    likeVideosLoader : false,
    likeVideos : [],
}


export const addToLikedVideos = createAsyncThunk("likeVideoList/addToLikedVideos",async({video,userToken},{rejectWithValue})=>{
    try {
       
        const res = await axios.post('/api/user/likes',{video:{...video}},{headers:{authorization:userToken}})
       
        return res.data.likes;
    } catch (error) {
        return rejectWithValue(error.res.data);
    }
})

export const removeFromLikedVideos = createAsyncThunk("likeVideoList/removeFromLikedVideos",async({video,userToken},{rejectWithValue})=>{
    try {
       
        const res = await axios.delete(`/api/user/likes/${video._id}`,{headers:{authorization:userToken}})
      
        return res.data.likes;
    } catch (error) {
       
        return rejectWithValue(error.res.data);
    }
})


const likeSlice = createSlice({
    name:"likeVideoList",
    initialState,
    reducers:{},
    extraReducers:{
        [addToLikedVideos.pending]:(state)=>{
            state.likeVideosLoader = true;
        },
        [addToLikedVideos.fulfilled]:(state ,action)=>{
            state.likeVideosLoader = false;
            state.likeVideos = action.payload;
        },
        [addToLikedVideos.rejected]:(state,action)=>{
            state.likeVideosLoader = false;
        },
        [removeFromLikedVideos.pending]:(state)=>{
            state.likeVideosLoader = true;
        },
        [removeFromLikedVideos.fulfilled]:(state,action)=>{
            state.likeVideosLoader = false;
            state.likeVideos = action.payload;
        },
        [removeFromLikedVideos.rejected]:(state,action)=>{
            state.likeVideosLoader = false;
        }
    },
})
export default likeSlice.reducer;