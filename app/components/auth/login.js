import React from 'react'
import InputWithLabel from '../general/InputWithLabel'
import api from '../../utils/apiHelpers'
import auth from '../../utils/auth'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function () {
    return {username: '', password: '', error: ''};
  },
  handleUsernameChange: function(e) {
    this.setState({ username: e.target.value });
  },
  handlePasswordChange: function(e) {
    this.setState({ password: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var password = this.state.password.trim();
    if (!username || !password) {
      return;
    }

    api.login({
      username: username,
      password: password
    }).then(function(data) {
      if (data.token) {
        auth.login(data.token);
        this.context.router.push('/');
      } else if (data.error) {
        this.setState(data)
      }
    }.bind(this));
  },
  render: function() {
    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <InputWithLabel value={this.state.username} field="username" handleChange={this.handleUsernameChange} />
        <InputWithLabel value={this.state.password} field="password" handleChange={this.handlePasswordChange} />
        <input type="submit" value="Login" />
      </form>
    )
  }
})