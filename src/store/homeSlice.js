import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url : {}
    },
    reducers : {
        setUrl : (state, action) => {
            state.url = action.payload;
        }
    },
})

export const {setUrl} = homeSlice.actions
export default homeSlice.reducer