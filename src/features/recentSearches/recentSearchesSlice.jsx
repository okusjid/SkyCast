import { createSlice } from "@reduxjs/toolkit";

const recentSearchesSlice = createSlice({
  name: "recentSearches",
  initialState: [],
  reducers: {
    addSearch: (state, action) => {
      if (state.length >= 5) {
        state.shift(); // Remove the oldest search if there are already 5 searches
      }
      state.push(action.payload);
    },
  },
});

export const { addSearch } = recentSearchesSlice.actions;
export default recentSearchesSlice.reducer;
