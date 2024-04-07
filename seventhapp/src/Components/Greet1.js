import React, { Component } from 'react'

 class Greet1 extends Component
{
    render() 
    {
    return(<div>
        <h1>Hello {this.props.namevalue}{this.props.heroname}</h1>
        {this.props.children}</div>
    )
}
}
export default Greet1