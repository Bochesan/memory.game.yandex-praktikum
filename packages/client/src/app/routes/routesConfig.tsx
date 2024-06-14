import {
  GamePage,
  LeaderBoardPage,
  MainPage,
  UserProfilePage,
  TopicPage,
  ForumPage,
  NotFoundPage,
  ErrorPage,
  ChooseLevelPage,
  AuthPage,
} from '@/pages'

import { App } from '@/shared/components'

export const routesConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: '/game',
        Component: GamePage,
      },
      {
        path: '/profile',
        Component: UserProfilePage,
      },
      {
        path: '/edit-password',
        Component: UserProfilePage,
      },
      {
        path: '/leader-board',
        Component: LeaderBoardPage,
      },
      {
        path: '/forum',
        Component: ForumPage,
      },
      {
        path: '/forum/:topicId',
        Component: TopicPage,
      },
      {
        path: '/levels',
        Component: ChooseLevelPage,
      },
      {
        path: '/error',
        Component: ErrorPage,
      },
      {
        path: '/sign-up',
        Component: AuthPage,
      },
      {
        path: '/sign-in',
        Component: AuthPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]
