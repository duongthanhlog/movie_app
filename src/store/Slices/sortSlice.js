import { createSlice } from "@reduxjs/toolkit"

const sortSlice = createSlice({
    name : 'sort',
    initialState : {
        value : 'popularity.desc',
        genres : [],
        data : []
    },
    reducers : {
        changeSortValue : (state, action) => {
            state.value = action.payload
        },
        changeGenres : (state, action) => {
            state.genres = action.payload
        }
    },
})

export const { changeSortValue, changeGenres }  = sortSlice.actions
export default sortSlice.reducer