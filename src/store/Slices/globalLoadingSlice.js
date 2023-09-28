import { createSlice } from "@reduxjs/toolkit";

const globalLoadingSlice = createSlice({
    name : 'globalLoading',
    initialState : {
        globalLoading : false
    },
    reducers : {
        setGlobalLoading : (state, action) => {
            state.globalLoading = action.payload
        } 
    }
})

export const {
    setGlobalLoading
} = globalLoadingSlice.actions;

export default globalLoadingSlice.reducer