import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

export default class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Rani"
      }
    }
    componentDidMount()
    {
        setInterval(()=>{ 
            this.setState({
                name:"ranikumari"
            })
        },2000)

    }
   
  render() {
    return (
      <div>
ParentComponent
<RegComp name={this.state.name}></RegComp>
<PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}
