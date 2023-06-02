import { fetchDataFromApi } from "@/utils/httpRequest"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// export const fetchFilteredGenre = createAsyncThunk(
//     'filterGenres/fetchFilterGenre',
//     async (genreIds) => {
//         return genreIds
//     }
// )

const filterGenres = createSlice({
    name : 'filterGenres',
    initialState : {
        genreIds : [],
        data : []
    },
    reducers : {
        getGenreIds : (state, action) => {
            state.genreIds = action.payload
        },
        changeSortValue : (state, action) => {
            state.value = action.payload
        },
    },
})

export const { changeSortValue, getGenreIds }  = filterGenres.actions
export default filterGenres.reducer