import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    }
    changeHandler(e)
    { this.setState({message:e.target.value})

    }
  render() {
    return (
      <div><input type="text" value={this.state.message} onChange={this.changeHandler.bind(this)}/>
       <h1>{this.state.message}</h1>
       </div>
    )
  }
}

export default EventBind