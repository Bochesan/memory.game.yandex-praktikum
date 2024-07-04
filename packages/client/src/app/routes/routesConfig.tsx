import { AuthPage } from '@/pages/auth-page/auth-page'
import { ChooseLevelPage } from '@/pages/choose-level-page/choose-level-page'
import { ErrorPage } from '@/pages/error-page/error-page'
import { ForumCreatePage } from '@/pages/forum-create-page/forum-create-page'
import { ForumPage } from '@/pages/forum-page/forum-page'
import { GamePage } from '@/pages/game-page/game-page'
import { LeaderBoardPage } from '@/pages/leader-board-page/leader-board-page'
import { MainPage } from '@/pages/main-page/main-page'
import { NotFoundPage } from '@/pages/not-found-page/not-found-page'
import { TopicPage } from '@/pages/topic-page/topic-page'
import { UserProfilePage } from '@/pages/user-profile-page/user-profile-page'
import { App } from '@/shared/components/app'
import { RouteObject } from 'react-router-dom'

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
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
        path: '/forum-create',
        Component: ForumCreatePage,
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
