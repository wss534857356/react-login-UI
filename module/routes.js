import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Login from './Login'

module.exports = (
  <Route path="/mui/" component={App}>
    <IndexRoute component={Login}/>
  </Route>
  )