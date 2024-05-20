import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  GamePage,
  LeaderBoardPage,
  MainPage,
  SignInPage,
  SignUpPage,
  UserProfilePage,
  TopicPage,
  ForumPage,
  NotFoundPage,
} from '@/pages'
import { App } from '@/shared/components'

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
        path: '/sing-up',
        Component: SignUpPage,
      },
      {
        path: '/sing-in',
        Component: SignInPage,
      },
      {
        path: '/game',
        Component: GamePage,
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
      },
      {
        path: '/forum/:topicId',
        Component: TopicPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
])

export const Routes = () => <RouterProvider router={router} />
