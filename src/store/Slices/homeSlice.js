import { fetchDataFromApi } from "@/utils/httpRequest";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchConfigUrl = createAsyncThunk(
    'movieUrl/fetchConfigUrl',
    async () => {
        const data = await fetchDataFromApi('configuration')
        return data
    }
)


const homeSlice = createSlice({
    name: 'movieUrl',
    initialState: {
        url : {},
    },
    reducers : {
 
    },
    extraReducers(builder) {
        builder
        .addCase(fetchConfigUrl.fulfilled, (state, action) => {
            state.url = action.payload
        })
      }
})

export const { setUrl, getConfigApiUrl } = homeSlice.actions
export default homeSlice.reducer