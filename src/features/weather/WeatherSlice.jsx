import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: 'Lahore', // Default city
  isCelsius: true, // Fixed typo from isCelcius to isCelsius
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setIsCelsius: (state, action) => {
      state.isCelsius = action.payload; // Fixed typo from isCelcius to isCelsius
    },
  },
});

export const { setCity, setIsCelsius } = weatherSlice.actions;
export const selectCity = (state) => state.weather.city;
export const selectIsCelsius = (state) => state.weather.isCelsius; // Selector for isCelsius

export default weatherSlice.reducer;
