import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import userSlice from './userSlice'
export default configureStore({
    reducer:{
        authUser : authSlice,
        account : userSlice
    }
})