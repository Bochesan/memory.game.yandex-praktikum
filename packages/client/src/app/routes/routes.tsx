import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from './routesConfig'

const router = createBrowserRouter(routesConfig)

export const Routes = () => <RouterProvider router={router} />
