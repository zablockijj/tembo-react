import React from 'react'
import JournalList from './journal/JournalList'
import TemboHeader from './layout/TemboHeader'
import { IndexLink } from 'react-router'
import NavLink from './general/NavLink'
import auth from '../utils/auth'

export default React.createClass({
  render() {
    function loginLinks() {
      if (auth.loggedIn()) {
        return <NavLink to='/logout' activeClassName="active">Logout</NavLink>
      } else {
        return (
          [<NavLink to='/login' activeClassName="active">Login</NavLink>,
          <NavLink to='/signup' activeClassName="active">Signup</NavLink>]
      )}
    }
    return (
      <TemboHeader>
        <IndexLink to='/' activeClassName="active">Home</IndexLink>
        <NavLink to='/journal/index' activeClassName="active">Journals</NavLink>
        {loginLinks()}
        {this.props.children}
      </TemboHeader>
    )
  }
})
