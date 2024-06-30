import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  TLogin,
  TPassword,
  TRegister,
  TUser,
  TSetLeaderboard,
  TGetLeaderboard,
  TLeaderboardItem,
} from '@/types'
import { API, METHODS } from '@/utils'

export const apiSlices = createApi({
  reducerPath: 'api',
  tagTypes: ['User', 'Leaderboard'],
  baseQuery: fetchBaseQuery({
    baseUrl: API.Base,
    credentials: 'include',
  }),
  endpoints: builder => ({
    getUser: builder.query<void, void>({
      query: () => `auth/user`,
      providesTags: ['User'],
    }),

    signIn: builder.mutation({
      query: (credentials: TLogin) => ({
        method: METHODS.Post,
        url: 'auth/signin',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    signUp: builder.mutation({
      query: (credentials: TRegister) => ({
        method: METHODS.Post,
        url: 'auth/signup',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    logOut: builder.mutation({
      query: () => ({
        method: METHODS.Post,
        url: `auth/logout`,
      }),
      invalidatesTags: ['User'],
    }),

    editProfile: builder.mutation({
      query: (credentials: TUser) => ({
        method: METHODS.Put,
        url: 'user/profile',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    editPassword: builder.mutation({
      query: (credentials: TPassword) => ({
        method: METHODS.Put,
        url: 'user/password',
        body: credentials,
      }),
    }),

    uploadAvatar: builder.mutation({
      query: (credentials: FormData) => ({
        headers: {},
        method: METHODS.Put,
        url: 'user/profile/avatar',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    getLeaderboard: builder.query<TLeaderboardItem[], TGetLeaderboard>({
      query: (credentials: TGetLeaderboard) => ({
        method: METHODS.Post,
        url: `/leaderboard/${credentials.teamName}`,
        body: credentials,
      }),
      providesTags: ['Leaderboard'],
    }),

    setLeaderboard: builder.mutation({
      query: (credentials: TSetLeaderboard) => ({
        method: METHODS.Post,
        url: '/leaderboard',
        body: credentials,
      }),
      invalidatesTags: ['Leaderboard'],
    }),
  }),
})

export const {
  useGetUserQuery,
  useLogOutMutation,
  useSignInMutation,
  useSignUpMutation,
  useEditProfileMutation,
  useEditPasswordMutation,
  useUploadAvatarMutation,
  useGetLeaderboardQuery,
  useSetLeaderboardMutation,
} = apiSlices
