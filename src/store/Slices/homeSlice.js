import { fetchDataFromApi } from "@/utils/httpRequest";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchConfigUrl = createAsyncThunk(
    'movieUrl/fetchConfigUrl',
    async () => {
        const data = await fetchDataFromApi('configuration')
        return data
    }
)

export const fetchLanguage = createAsyncThunk(
    'movieUrl/fetchLanguage',
    async () => {
        const data = await fetchDataFromApi('/configuration/languages')
        return data
    }
)

const homeSlice = createSlice({
    name: 'movieUrl',
    initialState: {
        url : {},
        language : []
    },
    extraReducers(builder) {
        builder
        .addCase(fetchConfigUrl.fulfilled, (state, action) => {
            state.url = action.payload
        })
        .addCase(fetchLanguage.fulfilled, (state, action) => {
            state.language = action.payload
        } )
      }
})

export const { setUrl, getConfigApiUrl } = homeSlice.actions
export default homeSlice.reducer