import React from 'react'
import { render } from 'react-dom'

// using hashHistory for now, while learning react, will change to browser history
// when implmenting server-rendering
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'));
