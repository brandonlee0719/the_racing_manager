/**
 * @module redux
 */
import { createStore, applyMiddleware, compose } from 'redux'

/**
 * @module redux-thunk
 */
import thunkMiddleware from 'redux-thunk'

/**
 * @module redux-logger
 */
import loggerMiddleware from 'redux-logger'

/**
 *  @module authenticatedRequestMiddleware
 */
import authenticatedRequestMiddleware from 'middleware/AuthenticatedRequest'

/**
 * @module rootReducer
 */
import rootReducer from 'reducers/rootReducer'

import isDev from 'isdev'

let configureStore

// If the app is running in dev, add in redux dev tools.
if (isDev) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  configureStore = initialState => {
    const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(thunkMiddleware, authenticatedRequestMiddleware, loggerMiddleware)
      )
    )

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('reducers/rootReducer', () => {
        const nextRootReducer = require('reducers/rootReducer')
        store.replaceReducer(nextRootReducer)
      })
    }

    return store
  }
} else {
  configureStore = initialState => {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware, authenticatedRequestMiddleware)
    )
  }
}

export default configureStore
