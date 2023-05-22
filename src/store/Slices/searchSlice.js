import { fetchDataFromApi } from "@/utils/httpRequest";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const filterMovies = createAsyncThunk(
  "filter/filterMovies",
  async ({ filterSlug, searchValue }, thunkApi) => {
    const { search } = thunkApi.getState()
    try {
      const res = await fetchDataFromApi(`search/${filterSlug}`, { query : searchValue });
      const data = await res.results.slice(0, search.resultCount)
      return data;
    } 
    catch (err) {
      console.log(err);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    result: [],
    resultCount: 8,
  },
  extraReducers: (builder) => {
    builder.addCase(filterMovies.fulfilled, (state, action) => {
      state.result = action.payload;
    });
  },
});

export default searchSlice.reducer;
