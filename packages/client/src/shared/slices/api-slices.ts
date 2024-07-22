import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  TLogin,
  TPassword,
  TRegister,
  TUser,
  TSetLeaderboard,
  TGetLeaderboard,
  TLeaderboardItem,
  TGetUserInternal,
  TAddUserInternal,
  TGetTopic,
  TAddTopic,
  TAddComment,
  TAddReply,
  TGetReactions,
  TSetReaction,
} from '@/types'
import { API, METHODS, OAUTH } from '@/utils'

const defaultBaseQuery = fetchBaseQuery({
  baseUrl: API.Base,
  credentials: 'include',
})

const internalBaseQuery = fetchBaseQuery({
  baseUrl: API.Internal,
  credentials: 'include',
})

export const apiSlices = createApi({
  reducerPath: 'api',
  tagTypes: ['User', 'Leaderboard', 'Topic', 'Reactions'],
  baseQuery: defaultBaseQuery,
  endpoints: builder => ({
    getUser: builder.query<TUser, void>({
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

    getUserInternal: builder.query<any, TGetUserInternal>({
      queryFn: async (credentials: TGetUserInternal, api, extraOptions) => {
        const queryString = new URLSearchParams(credentials).toString()
        const result = await internalBaseQuery(
          {
            url: `/users?${queryString}`,
            method: 'GET',
          },
          api,
          extraOptions
        )
        return result
      },
    }),

    addUserInternal: builder.mutation({
      queryFn: async (credentials: TAddUserInternal, api, extraOptions) => {
        const result = await internalBaseQuery(
          {
            method: METHODS.Post,
            url: '/users',
            body: credentials,
          },
          api,
          extraOptions
        )
        return result
      },
      invalidatesTags: ['Topic'],
    }),

    getTopics: builder.query<any, unknown>({
      queryFn: async (credentials, api, extraOptions) => {
        const result = await internalBaseQuery(
          {
            url: `/topics`,
            method: 'GET',
          },
          api,
          extraOptions
        )
        return result
      },
      providesTags: ['Topic'],
    }),

    getTopic: builder.query<any, TGetTopic>({
      queryFn: async (credentials: TGetTopic, api, extraOptions) => {
        const topicId = credentials.topic_id
        const result = await internalBaseQuery(
          {
            url: `/topics/${topicId}`,
            method: 'GET',
          },
          api,
          extraOptions
        )
        return result
      },
      providesTags: ['Topic'],
    }),

    addTopic: builder.mutation({
      queryFn: async (credentials: TAddTopic, api, extraOptions) => {
        const result = await internalBaseQuery(
          {
            method: METHODS.Post,
            url: '/topics',
            body: credentials,
          },
          api,
          extraOptions
        )
        return result
      },
      invalidatesTags: ['Topic'],
    }),

    addComment: builder.mutation({
      queryFn: async (credentials: TAddComment, api, extraOptions) => {
        const result = await internalBaseQuery(
          {
            method: METHODS.Post,
            url: '/comments',
            body: credentials,
          },
          api,
          extraOptions
        )
        return result
      },
      invalidatesTags: ['Topic'],
    }),

    addReply: builder.mutation({
      queryFn: async (credentials: TAddReply, api, extraOptions) => {
        const result = await internalBaseQuery(
          {
            method: METHODS.Post,
            url: '/replies',
            body: credentials,
          },
          api,
          extraOptions
        )
        return result
      },
      invalidatesTags: ['Topic'],
    }),

    signInOAuth: builder.mutation<void, { code: string; redirect_uri: string }>(
      {
        query: credentials => ({
          url: OAUTH.Yandex,
          method: METHODS.Post,
          body: credentials,
        }),
        invalidatesTags: ['User'],
      }
    ),

    getServiceId: builder.query<{ service_id: string }, void>({
      query: () => ({
        url: `${API.Base}${OAUTH.ServiceId}`,
        params: { redirect_uri: OAUTH.Redirect },
        credentials: 'include',
      }),
    }),

    getReactions: builder.query<any, TGetReactions>({
      queryFn: async (credentials: TGetReactions, api, extraOptions) => {
        const topicId = credentials.topic_id
        const userId = credentials.user_id
        const response = await internalBaseQuery(
          {
            url: `/reactions?topic_id=${topicId}&?user_id=${userId}`,
            method: 'GET',
          },
          api,
          extraOptions
        )
        return response
      },
      providesTags: ['Reactions'],
    }),

    setReaction: builder.mutation({
      queryFn: async (credentials: TSetReaction, api, extraOptions) => {
        const response = await internalBaseQuery(
          {
            method: METHODS.Post,
            url: '/reaction',
            body: credentials,
          },
          api,
          extraOptions
        )
        return response
      },
      invalidatesTags: ['Reactions'],
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
  useGetUserInternalQuery,
  useAddUserInternalMutation,
  useGetTopicsQuery,
  useGetTopicQuery,
  useAddTopicMutation,
  useAddCommentMutation,
  useAddReplyMutation,
  useSignInOAuthMutation,
  useGetServiceIdQuery,
  useGetReactionsQuery,
  useSetReactionMutation,
} = apiSlices
