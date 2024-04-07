import React, { Component } from 'react'

class RefsDemo  extends Component{
    constructor(props) {
      super(props)
    
     this.inputRef=React.createRef()
    }

    componentDidMount()
    {
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }
    render()
    {
  return (
    <div>
        <input type="text" ref={this.inputRef} onChange={()=>{alert(this.inputRef.current.value)}}/>
    </div>
  )}
}

export default RefsDemo