import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import Journal from '../components/journal/Journal'
import JournalList from '../components/journal/JournalList'
import auth from '../utils/auth'
import Login from '../components/auth/login'
import Signup from '../components/auth/signup'
import Logout from '../components/auth/logout'
import JournalContainer from '../containers/JournalContainer'

export default function() {
  function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/logout' component={Logout} />
        <Route path='/journal' component={JournalContainer} onEnter={requireAuth} >
          <Route path='index' component={JournalList} onEnter={requireAuth} />
          <Route path=':journalId' component={Journal} onEnter={requireAuth} />
        </Route>
      </Route>
    </Router>
  )
}