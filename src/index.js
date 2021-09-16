import 'styles/index.scss'

import isDev from 'isdev'

import React from 'react'

import { render } from 'react-dom'

import { queryBySelector } from 'utils/domutils'

import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './containers/App'

import { AppContainer } from 'react-hot-loader'

import 'assets/images/sharing.jpg'

require('smoothscroll-polyfill').polyfill()

if (isDev) {
  // Explicitly set Perf to be in the global scope.
  window.Perf = require('react-addons-perf')
}

// Initialise for tap events
injectTapEventPlugin()

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    queryBySelector('.main-container')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./containers/App', () => { renderApp() })
}
