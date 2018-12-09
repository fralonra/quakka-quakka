import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import { ErrorBoundary, Main } from './layouts'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </Provider>
    )
  }
}

export default App
