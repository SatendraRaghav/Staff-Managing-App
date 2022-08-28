import webSlice from "./ProfileReducer";
import LoginSlice from "./LoginReducer";

import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
    reducer:{
        ProfileReducer:webSlice,
        LoginReducer:LoginSlice
    },
   
})