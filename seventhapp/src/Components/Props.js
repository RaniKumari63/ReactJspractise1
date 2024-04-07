import React from 'react'

function Props(props) {
  return (
    <div>{props.id}{props.name}{props.children}</div>
  )
}

export default Props