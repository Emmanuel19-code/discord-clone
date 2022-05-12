import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import LoginReducer from './LoginSlice'



export const store=configureStore({
    reducer:{
        user:LoginReducer,
        app:appReducer
    },
})