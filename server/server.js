/* eslint-disable no-console, no-use-before-define */

import path from 'path'
import Express from 'express'
import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import PrettyError from 'pretty-error';

import { RouterContext, match } from 'react-router'
import createMemoryHistory from 'history/lib/createMemoryHistory'

import configureStore from '../shared/store/configureStore'
import App from '../shared/containers/App'
import routes from '../shared/routes.js';


const app = new Express()
const pretty = new PrettyError()
const port = 3000

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(Express.static(path.join(__dirname, '../shared/static')))
// This is fired every time the server side receives a request
app.use(handleRender)

function handleRender(req, res) {
    // Compile an initial state
    const preloadedState = {}
    // Create a new Redux store instance
    const store = configureStore(preloadedState)
    const history = createMemoryHistory()
    // const routes = crateRoutes(history);
    // const location = createLocation(req.url)
    match({ history, routes, location: req.originalUrl }, (err, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathName + redirectLocation.search);
      } else if (err) {
        console.error('ROUTER ERROR:', pretty.render(err));
        res.status(500);
      } else if (renderProps) {
        // Render the component to a string
        const html = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        )

        // Grab the initial state from our Redux store
        const finalState = store.getState()

        // Send the rendered page back to the client
        res.send(renderFullPage(html, finalState))

      } else {
        res.status(404).send('Not found');
      }
    })
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Yummy Tracker</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
        <link rel="stylesheet" href="libs/font-awesome-4.7.0/css/font-awesome.min.css"
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
