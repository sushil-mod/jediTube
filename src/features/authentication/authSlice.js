import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userToken : JSON.parse(localStorage.getItem('loginInfo'))?.userToken ,
    user : "",
    loadingStatus : false ,

}

export const userLoginHandler = createAsyncThunk(
    'authentication/userLoginHandler',async ({email,password},{rejectWithValue})=>{
       try {
        console.log(email,password);
        const res = await axios.post("/api/auth/login",{email,password});
        console.log(res.data);
        return res.data;
       } catch (error) {
           console.log(error);
       }
}
);
export const userSignupHandler = createAsyncThunk(
    'authentication/userSignupHandler', async ({ email,password,firstName,lastName },{ rejectWithValue }) => {
        try {
            console.log(email,password,firstName,lastName);
            const res = await axios.post("api/auth/signup",{ email,password,firstName,lastName })
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.res.data);
        }
    }
)


export const authSlice = createSlice({
    name:"authentication",
    initialState,
    reducers:{
        userLogoutHandler: (state) => {
            state.userToken = "",
            state.user =""
        },
    },
    extraReducers:{
        [userLoginHandler.pending]:(state) => {
            state.loadingStatus = true;
        },
        [userLoginHandler.fulfilled]:(state,action)=>{
            state.loadingStatus = false;
            state.userToken = action.payload.encodedToken ;
            state.user = action.payload.foundUser ;
            localStorage.setItem('loginInfo',JSON.stringify({ userToken : action.payload.encodedToken ,user: action.payload.foundUser }))
            
        },
        [userLoginHandler.rejected]:(state,action)=>{
            state.loadingStatus = false;
        },
        [userSignupHandler.pending]:(state) => {
            state.loadingStatus = true;
        },
        [userSignupHandler.fulfilled]:(state,action)=>{
            state.loadingStatus = false;
            state.userToken = action.payload.encodedToken ;
            state.user = action.payload.createdUser ;
            localStorage.setItem('loginInfo',JSON.stringify({ userToken : action.payload.encodedToken ,user: action.payload.foundUser }))
            
        },
        [userSignupHandler.rejected]:(state,action)=>{
            state.loadingStatus = false;
        },
    },
})


export const { userLogoutHandler } = authSlice.actions ;
export default authSlice.reducer;