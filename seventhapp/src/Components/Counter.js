import React, { Component } from 'react'

class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {
     count:0
  }
}
 increment=()=>
{
this.setState({
    count:this.state.count+5
},()=>{ console.log("callback value",this.state.count)})
}

incrementFive()
{ 
  this.setState((prevState,props)=>(
    {
      count:prevState.count+props.addValue
    }
  ))
}
decrement=()=>
{
  this.setState({count:this.state.count-1},()=>{})
}

  render() {
    return (
        <div>
      <div>count-{this.state.count}</div>
      <button onClick={()=>
    {this.increment()}}>increment</button>
      <button onClick={()=>
    {this.decrement()}}>decrement</button>
    <button onClick={()=>{this.incrementFive()}}>five</button>
      </div>
      
    )
  }
}

export default Counter