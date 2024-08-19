import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: 'Lahore', // Default city
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = weatherSlice.actions;
export const selectCity = (state) => state.weather.city;

export default weatherSlice.reducer;
