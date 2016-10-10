import React from 'react'
import auth from '../../utils/auth'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  logOut: function(e) {
    e.preventDefault();
    auth.logout();
    this.context.router.push('/');
  },
  render: function() {
    return (
      <button onClick={this.logOut}>Logout</button>
    )
  }
})