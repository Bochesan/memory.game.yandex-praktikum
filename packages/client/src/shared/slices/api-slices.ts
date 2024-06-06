import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TLogin, TRegister, TUser } from '@/types'
import { API, METHODS } from '@/utils'

export const apiSlices = createApi({
  reducerPath: 'api',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: API.Base,
    credentials: 'include',
  }),
  endpoints: builder => ({
    getUser: builder.query({
      query: () => `auth/user`,
      providesTags: result => {
        return result
          ? [result, { type: 'User', id: 'DATA' }]
          : [{ type: 'User', id: 'DATA' }]
      },
    }),

    signIn: builder.mutation({
      query: (credentials: TLogin) => ({
        method: METHODS.Post,
        url: 'auth/signin',
        body: credentials,
      }),
      invalidatesTags: [{ type: 'User', id: 'DATA' }],
    }),

    signUp: builder.mutation({
      query: (credentials: TRegister) => ({
        method: METHODS.Post,
        url: 'auth/signup',
        body: credentials,
      }),
      invalidatesTags: [{ type: 'User', id: 'DATA' }],
    }),

    logOut: builder.mutation({
      query: () => ({
        method: METHODS.Post,
        url: `auth/logout`,
      }),
      invalidatesTags: [{ type: 'User', id: 'DATA' }],
    }),

    userEdit: builder.mutation({
      query: (credentials: TUser) => ({
        method: METHODS.Put,
        url: 'user/profile',
        body: credentials,
      }),
      invalidatesTags: [{ type: 'User', id: 'DATA' }],
    }),

    uploadAvatar: builder.mutation({
      query: (credentials: File) => ({
        headers: {},
        method: METHODS.Put,
        url: 'user/profile/avatar',
        body: credentials,
      }),
      invalidatesTags: [{ type: 'User', id: 'DATA' }],
    }),
  }),
})

export const {
  useGetUserQuery,
  useLogOutMutation,
  useSignInMutation,
  useSignUpMutation,
  useUserEditMutation,
  useUploadAvatarMutation,
} = apiSlices
