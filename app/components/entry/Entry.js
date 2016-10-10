import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
        {this.props.children}
      </div>
    )
  }
})
