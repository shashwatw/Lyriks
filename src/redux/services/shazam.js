import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '2402d23c54msh144d415e850575dp13b690jsn31d9e1affe9e',
//     'X-RapidAPI-Host': '',
//   },
// };

// fetch('https://shazam.p.rapidapi.com/charts/track', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '2402d23c54msh144d415e850575dp13b690jsn31d9e1affe9e');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
  }),

});

export const { useGetTopChartsQuery } = shazamApi;
