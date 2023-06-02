import { fetchDataFromApi } from "@/utils/httpRequest";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchConfigUrl = createAsyncThunk(
    'movieUrl/fetchConfigUrl',
    async () => {
        const data = await fetchDataFromApi('configuration')
        return data
    }
)

export const fetchGenres = createAsyncThunk(
    'genre/getchGenre',
    async (mediaType) => {
        const data = await fetchDataFromApi(`genre/${mediaType}/list`)
        return data
    }
)


const homeSlice = createSlice({
    name: 'movieUrl',
    initialState: {
        url : {},
        genres : []
    },
    reducers : {
 
    },
    extraReducers(builder) {
        builder
        .addCase(fetchConfigUrl.fulfilled, (state, action) => {
            state.url = action.payload
        })
        .addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
      }
})

export const { setUrl, getConfigApiUrl } = homeSlice.actions
export default homeSlice.reducer