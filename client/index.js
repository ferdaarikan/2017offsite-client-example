import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../shared/store/configureStore'
import AppRoutes from './AppRoutes.jsx'
import 'bootstrap/dist/css/bootstrap.css';

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('app')

// window.onload = () => {  ReactDOM.render(<AppRoutes/>, document.getElementById('app'));};
render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  rootElement
)
