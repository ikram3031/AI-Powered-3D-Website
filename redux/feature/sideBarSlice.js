import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSideBarOpen : false,
}

const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
    }
})

export const { toggleSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;