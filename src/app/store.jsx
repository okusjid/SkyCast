import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../services/weatherApi";
import { timezoneApi } from "../bin/timezoneApi";
import recentSearchesReducer from "../features/recentSearches/recentSearchesSlice";
import WeatherSlice from "../Features/Weather/WeatherSlice";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [timezoneApi.reducerPath]: timezoneApi.reducer,
    weather: WeatherSlice,
    recentSearches: recentSearchesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware, timezoneApi.middleware),
});

export default store;
