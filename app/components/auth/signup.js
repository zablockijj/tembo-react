import React from 'react'
import InputWithLabel from '../general/InputWithLabel'
import api from '../../utils/apiHelpers'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function() {
    return {username: '', password: '', number: '', error: ''};
  },
  handleUsernameChange: function(e) {
    this.setState({ username: e.target.value });
  },
  handlePasswordChange: function(e) {
    this.setState({ password: e.target.value });
  },
  handleNumberChange: function(e) {
    this.setState({ number: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var password = this.state.password.trim();
    var number = this.state.number.trim();
    if (!username || !password) {
      return;
    }

    api.signup({
      username: username,
      password: password,
      number: number
    }).then(function() {
      if (data.error) {
        this.setState(data);
      } else {
        this.context.router.push('/login');
      }
      }.bind(this));
  },
  render: function() {
    return (
      <form className="signupForm" onSubmit={this.handleSubmit}>
        <InputWithLabel value={this.state.username} field="username" handleChange={this.handleUsernameChange} />
        <InputWithLabel value={this.state.password} field="password" handleChange={this.handlePasswordChange} />
        <InputWithLabel value={this.state.number} field="number" handleChange={this.handleNumberChange} />
        <input type="submit" value="Signup" />
      </form>
    )
  }
})