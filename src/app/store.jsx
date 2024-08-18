import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../services/weatherApi";
import recentSearchesReducer from "../features/recentSearches/recentSearchesSlice";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    recentSearches: recentSearchesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export default store;
