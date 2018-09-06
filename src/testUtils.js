import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-testing-library'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

// Examples Found @
// https://github.com/kentcdodds/react-testing-library/blob/master/examples/__tests__/react-redux.js

export const renderWithRedux = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState)
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>{ui}</Provider>
    ),
    store
  }
}

// Examples Found @
// https://github.com/kentcdodds/react-testing-library/blob/master/examples/__tests__/react-router.js
export const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  }
}
