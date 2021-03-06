import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import authReducer from './store/reducers/auth'
import history from './utils/history'
import { watchAuth } from './store/sagas/index'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(authReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watchAuth)

// console.log(history.push)

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
