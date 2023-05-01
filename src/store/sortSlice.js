import { createSlice } from "@reduxjs/toolkit"

const sortSlice = createSlice({
    name : 'sort',
    initialState : {
        sortValue : 'popularity.desc',
    },
    reducers : {
        changeSortValue : (state, action) => {
            state.sortValue = action.payload
        },
    },
})




export const { changeSortValue }  = sortSlice.actions
export default sortSlice.reducer