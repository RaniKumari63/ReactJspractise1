import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'rani'
      }
      console.log("LfeCycleA constructor")
    }
static getDerivedStateFromProps(props,state)
{
    console.log("life cycle a dervide")
return  null
}
componentDidMount()
{
    console.log("lifecycle componentdidmount")
}

  render() {
    return (
      <div>Lifecycle</div>
    )
  }
}
