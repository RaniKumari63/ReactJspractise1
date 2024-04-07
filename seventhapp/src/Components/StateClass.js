import React, { Component } from 'react'

export default class StateClass extends Component {
    state={
        count:0
    }
  render() {
    return (
      <div><div>Count-{this.state.count}</div>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
      <button onClick={()=>{this.setState({count:this.state.count-1})}}>-</button></div>
    )
  }
}
