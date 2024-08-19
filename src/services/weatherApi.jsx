import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "e5dbfaad1619ff60fd333a2410444ef9"; // Replace with your OpenWeather API key

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) => `weather?q=${city}&appid=${API_KEY}&units=metric`,
    }),
    getCityByCoords: builder.query({
      query: ({ lat, lon }) =>
        `reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    }),
  }),
});

export const { useGetWeatherByCityQuery, useGetCityByCoordsQuery } = weatherApi;