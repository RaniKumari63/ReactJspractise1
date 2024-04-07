import React, { Component } from 'react'

export default class Message extends Component {
    constructor()
    {
        super()
        this.state={
            message:'Welcome visitor'
        }
    }
    changeMesssage()
    {
        this.setState({
            message:"Thanku for Subscribe"
        })
    }
  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={()=>{this.changeMesssage()}}>Subscribe</button>
      </div>
    )
  }
}
