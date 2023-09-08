import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from './feature/sideBarSlice'

export const store = configureStore({
    reducer:{
        sideBar: sideBarReducer ,
    },
});