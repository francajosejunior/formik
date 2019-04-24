import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux'
import Counter from './../components/index'

const App = () => <Counter />

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
