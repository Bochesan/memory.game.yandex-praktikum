import ReactDOM from 'react-dom/server'
import {
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter,
} from 'react-router-dom/server'
import { Request as ExpressRequest } from 'express'
import { store } from './store'
import { createFetchRequest, createUrl } from '@/shared/utils/entry-server'
import { routesConfig } from './routes/routesConfig'
import { matchRoutes } from 'react-router-dom'
import { Provider } from 'react-redux'

export const render = async (req: ExpressRequest) => {
  const { dataRoutes, query } = createStaticHandler(routesConfig)

  const fetchRequest = createFetchRequest(req)
  const context = await query(fetchRequest)

  if (context instanceof Response) {
    throw context
  }

  const url = createUrl(req)

  const foundRoutes = matchRoutes(routesConfig, url)

  if (!foundRoutes) {
    throw new Error('Страница не найдена!')
  }

  const router = createStaticRouter(dataRoutes, context)

  const html = ReactDOM.renderToString(
    <Provider store={store}>
      <StaticRouterProvider router={router} context={context} />
    </Provider>
  )

  return {
    html,
    initialState: store.getState(),
  }
}
