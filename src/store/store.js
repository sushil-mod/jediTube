import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer  from '../features/authentication/authSlice';
import videoListReducer from '../features/video/videoSlice';
import categoryListReducer from '../features/category/categorySlice';
import playlistReducer from '../features/playlist/playlistSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
    reducer:{
        authentication : authenticationReducer,
        videoList : videoListReducer ,
        categoryList : categoryListReducer ,
        playlist : playlistReducer,
        modal : modalReducer,
    }
})