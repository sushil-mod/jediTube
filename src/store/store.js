import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer  from '../features/authentication/authSlice';

export const store = configureStore({
    reducer:{
        authentication : authenticationReducer,
    }
})