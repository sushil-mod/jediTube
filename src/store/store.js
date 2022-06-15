import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer  from '../features/authentication/authSlice';
import videoListReducer from '../features/video/videoSlice';
import categoryListReducer from '../features/category/categorySlice';

export const store = configureStore({
    reducer:{
        authentication : authenticationReducer,
        videoList : videoListReducer ,
        categoryList : categoryListReducer ,
    }
})