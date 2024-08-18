import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../services/weatherApi";
import { timezoneApi } from "../services/timezoneApi";
import recentSearchesReducer from "../features/recentSearches/recentSearchesSlice";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [timezoneApi.reducerPath]: timezoneApi.reducer,
    recentSearches: recentSearchesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware, timezoneApi.middleware),
});

export default store;
