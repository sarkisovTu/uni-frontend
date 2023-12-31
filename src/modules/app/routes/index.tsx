import { RouteObject, redirect } from 'react-router-dom'
import {
  LikesPage, MatchesPage, SettingsPage
} from '../pages'
import {
  likesLoader, matchesLoader, recommendationLoader, settingsLoader
} from '../loaders'
import { RecomendationPage } from '../pages/RecommendationPage'
import { AppLayout } from '@/layouts/App'

export const appRoutes: RouteObject[] = [
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        index: true,
        loader: () => redirect('/app/recommendation')
      },
      {
        path: 'settings',
        loader: settingsLoader,
        element: <SettingsPage />
      },
      {
        path: 'recommendation',
        loader: recommendationLoader,
        element: <RecomendationPage />
      },
      {
        path: 'likes',
        loader: likesLoader,
        element: <LikesPage />
      },
      {
        path: 'matches',
        loader: matchesLoader,
        element: <MatchesPage />
      }
    ]
  }
]
