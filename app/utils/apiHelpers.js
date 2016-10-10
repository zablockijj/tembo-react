var axios = require('axios');

var instance = axios.create({
  baseURL: 'http://localhost:3000'
});

var helpers = {
  signup: function(data) {
    return instance.post('/signup', data)
      .catch(function(e) {
        debugger;
      });
  },
  login: function(data) {
    return instance.post('/login', data)
      .then(function(data) {
        return data.data;
      })
      .catch(function(e) {
        return {error: 'error logging in - make sure you username and password are correct and try again'}
      });
  },
  journalsIndex: function() {
    return instance.get('/api/v1/journals/index', {
      headers: {'x-access-token': localStorage.getItem('token')}
    }).then(function(data) {
      return data.data;
    }).catch(function(e) {
      return {error: 'error retrieving journals'}
    });
  }
};

module.exports = helpers;
