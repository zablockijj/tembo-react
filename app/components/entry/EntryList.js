import React from 'react'
import Entry from './Entry'

export default React.createClass({
  render() {

    var entryNodes = this.props.data.map(entry => {
      return (
        <Entry date={entry.displayDate}>
          {entry.txt}
        </Entry>
      );
    });
    return (
      <div>
        {entryNodes}
      </div>
    )
  }
})
