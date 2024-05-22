import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlices = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ya-praktikum.tech/api/v2' }),
  endpoints: builder => ({
    getUser: builder.query({
      query: () => `auth/user`,
    }),
  }),
})

export const { useGetUserQuery } = apiSlices
