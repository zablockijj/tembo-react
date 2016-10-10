import React from 'react'

export default (props) => (
  <div>
    <input type="text" value={props.value} onChange={props.handleChange} id={props.field} />
    <label htmlFor={props.field}>{props.field}</label>
  </div>
)