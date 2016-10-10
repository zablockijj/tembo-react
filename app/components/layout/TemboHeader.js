import React from 'react'
import TemboLogo from '../general/TemboLogo'

export default function(props) {
  return (
    <div>
      <TemboLogo />
      {props.children}
    </div>
  )
}