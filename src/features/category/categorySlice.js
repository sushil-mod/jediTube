import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    categories:[],
    categoryLoader:false,
}


export const getCategoryList = createAsyncThunk('categoryList/getCategoryList', async (_,{rejectWithValue})=>{
    try {
        const res = await axios.get("/api/categories");
        console.log(res.data.categories);
        return res.data.categories;
    } catch (error) {
        console.log("from error");
        return rejectWithValue(error.res.data);
    }
})


export const categorySlice = createSlice({
    name:"categoryList",
    initialState,
    reducers:{},
    extraReducers:{
        [getCategoryList.pending]:(state)=>{
            state.categoryLoader = true;
        },
        [getCategoryList.fulfilled]:(state,action)=>{
            state.categoryLoader = false;
            state.categories = action.payload;
        },
        [getCategoryList.rejected]:(state,action)=>{
            state.categoryLoader = false;
        }
    },
})

export default categorySlice.reducer;