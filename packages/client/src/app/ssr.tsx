import ReactDOM from 'react-dom/server'
import { Request as ExpressRequest } from 'express'

export const render = async (req: ExpressRequest) => {
  const html = ReactDOM.renderToString(<h1>asdfadss</h1>)

  return {
    html,
  }
}
