export default {
  login: function(token) {
    if (localStorage.getItem('token')) {
      this.logout();
    }

    this.storeToken(token);
  },
  storeToken: function(token) {
    localStorage.setItem('token',token);
  },

  logout: function(callback) {
    delete localStorage.removeItem('token');
  },

  loggedIn: function() {
    return !!localStorage.getItem('token')
  }
}