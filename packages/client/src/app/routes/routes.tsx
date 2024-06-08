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
import ForumNewItem from '@/shared/components/forum-block/form-block-new-item/forum-new-item'
import forumMainPage from '@/pages/forum-main-page'

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
            Component: forumMainPage,
          },
          {
            path: 'create',
            Component: ForumNewItem,
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
