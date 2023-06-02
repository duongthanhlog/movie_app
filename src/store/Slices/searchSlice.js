import { fetchDataFromApi } from "@/utils/httpRequest";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchMovies = createAsyncThunk(
  "search/searchMovies",
  async ({ filterSlug, debounceValue }, thunkApi) => {
    const { search } = thunkApi.getState();
    try {
      const res = await fetchDataFromApi(
        `search/${filterSlug}?query=${debounceValue}`
      );
      const data = await res.results.slice(0, search.resultCount);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: false,
    noResult: false,
    result: [],
    resultCount: 8,
  },
  reducers: {
    resetResult: (state) => {
      state.result = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.result = action.payload;
        state.loading = false;
        const searchResultLength = state.result.length

        if (searchResultLength === 0) {
          state.noResult = true;
        }
        else {
          state.noResult = false
        }
      })
  },
});

export const { resetResult } = searchSlice.actions;
export default searchSlice.reducer;
