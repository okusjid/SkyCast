import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const timezoneApi = createApi({
  reducerPath: 'timezoneApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://worldtimeapi.org/api/',
  }),
  endpoints: (builder) => ({
    getTimeByTimezone: builder.query({
      query: (timezone) => `timezone/${timezone}`,
    }),
  }),
});

export const { useGetTimeByTimezoneQuery } = timezoneApi;
