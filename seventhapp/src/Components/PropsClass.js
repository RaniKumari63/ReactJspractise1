import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <div>{this.props.age}{this.props.address}{this.props.children}</div>
    )
  }
}
