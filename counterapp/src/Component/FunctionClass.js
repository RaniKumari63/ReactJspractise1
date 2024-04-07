import React, { Component } from 'react'

class FunctionClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:"hai how ru"
      }
      this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler()
    {
        this.setState({
            message:"good bye"
        })
    }
    render(){
  return (
    <div><div>{this.state.message}</div>
      {/*   <button onClick={this.clickHandler.bind(this)}>gggghhhggggg</button></div> */}
{/*     <button onClick={()=>{this.clickHandler()}}>gggghhhggggg</button></div> */}
      <button onClick={this.clickHandler}>gggghhhggggg</button></div>
    
  )
}
}
export default FunctionClass