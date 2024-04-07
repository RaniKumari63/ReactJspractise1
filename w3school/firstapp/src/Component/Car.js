import React from 'react'

function Car(props) {
  return (
    <div><h2>I am a {props.brand.name}{props.brand.model}Car!</h2></div>
  )
}

export default Car