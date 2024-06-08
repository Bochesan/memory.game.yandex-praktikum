import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
import ForumMainPage from '@/pages/forum-main-page'
import ForumCreatePage from '@/pages/forum-create-page/forum-create-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        Component: MainPage,
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
        path: '/game',
        Component: GamePage,
      },
      {
        path: '/profile',
        Component: UserProfilePage,
      },
      {
        path: '/leader-board',
        Component: LeaderBoardPage,
      },
      {
        path: '/forum',
        Component: ForumPage,
        children: [
          {
            index: true,
            Component: ForumMainPage,
          },
          {
            path: 'create',
            Component: ForumCreatePage,
          },
          {
            path: ':topicId',
            Component: TopicPage,
          },
        ],
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
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
])

export const Routes = () => <RouterProvider router={router} />
