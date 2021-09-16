import React from 'react'

import { Provider } from 'react-redux'

import router from 'config/router'

import store from 'store'

const App = () => {
  return (
    <Provider store={store}>
      { router }
    </Provider>
  )
}

export default App
