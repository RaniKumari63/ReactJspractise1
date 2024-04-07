import React, { Component } from 'react'
class Counter extends Component
{
    state={
        count:0
    }
    render()
    {
        return(<div className='container'><h1>Counter Example</h1>
        <h1>{this.state.count}</h1>
        <button className="btn btn-success" style={{marginRight:15}}  onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
        <button className="btn btn-danger" onClick={()=>{this.setState({count:this.state.count-1})}}>-</button></div>)
    }
}
export default Counter