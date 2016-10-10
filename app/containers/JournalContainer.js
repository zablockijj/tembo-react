import React from 'react'
import api from '../utils/apiHelpers.js'

export default React.createClass({
  getInitialState: function() {
    return {journals: []};
  },
  componentDidMount: function() {
    api.journalsIndex().then(function(data) {
      debugger;
    });
  },
  render: function() {
    return <div>Bloop</div>
  }
});