import { createSlice } from "@reduxjs/toolkit"

const sortSlice = createSlice({
    name : 'sort',
    initialState : {
        value : 'popularity.desc',
        data : []
    },
    reducers : {
        changeSortValue : (state, action) => {
            state.value = action.payload
        },
    },
})

export const { changeSortValue }  = sortSlice.actions
export default sortSlice.reducer