import { createSlice } from "@reduxjs/toolkit";

const recentSearchesSlice = createSlice({
  name: "recentSearches",
  initialState: [],
  reducers: {
    addSearch: (state, action) => {
      const { city, temperature, weather, humidity } = action.payload;

      // Validate that required data is present
      if (!city || !temperature || !weather || !humidity) {
        // If any essential data is missing, don't add the search
        console.warn("Incomplete data, search not added.");
        return;
      }

      console.log("City: ", city);
      console.log("Temperature: ", temperature);
      console.log("Weather: ", weather);
      console.log("Humidity: ", humidity);

      // Check if the search for the city already exists
      const existingIndex = state.findIndex(
        (search) => search.city.toLowerCase() === city.toLowerCase()
      );

      // If the city already exists, remove the old entry
      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      }

      // Ensure only the 5 most recent searches are kept
      if (state.length >= 5) {
        state.shift(); // Remove the oldest search
      }

      // Add the new search
      state.push(action.payload);
    },
  },
});

export const { addSearch } = recentSearchesSlice.actions;
export default recentSearchesSlice.reducer;
