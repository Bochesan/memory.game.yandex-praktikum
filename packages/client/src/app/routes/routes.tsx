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
  ErrorPage,
  ChooseLevelPage,
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
        path: '/sign-up',
        Component: SignUpPage,
      },
      {
        path: '/sign-in',
        Component: SignInPage,
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
