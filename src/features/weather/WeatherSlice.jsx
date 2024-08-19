import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Lahore", // Default city
  isCelsius: true, // Default temperature unit
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setIsCelsius: (state, action) => {
      state.isCelsius = action.payload; // Update isCelsius based on the action payload
    },
  },
});

export const { setCity, setIsCelsius } = weatherSlice.actions;
export const selectCity = (state) => state.weather.city;
export const selectIsCelsius = (state) => state.weather.isCelsius; // Select isCelsius from the Redux store

export default weatherSlice.reducer;
